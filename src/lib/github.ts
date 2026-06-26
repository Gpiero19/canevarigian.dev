import { unstable_cache } from 'next/cache';
import type { GitHubRepo } from '@/types/github';
import { fallbackProjects } from '@/data/fallback-projects';
import { projectMeta } from '@/data/project-meta';
import { config } from '@/lib/config';

async function _fetchFeaturedRepos(
  username: string,
  featuredNames: string[],
): Promise<GitHubRepo[]> {
  const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
  if (config.githubToken) {
    headers['Authorization'] = `Bearer ${config.githubToken}`;
  }

  let repos: GitHubRepo[];
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      { headers },
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = (await res.json()) as Array<{
      name: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      html_url: string;
    }>;
    repos = data.map((r) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      url: r.html_url,
    }));
  } catch (err) {
    console.error(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        level: 'error',
        event: 'github_fetch_error',
        username,
        error: err instanceof Error ? err.message : String(err),
      }),
    );
    repos = fallbackProjects;
  }

  return featuredNames
    .map((name) => repos.find((r) => r.name === name))
    .filter((r): r is GitHubRepo => r !== undefined)
    .map((r) => {
      const meta = projectMeta[r.name];
      return meta?.summary ? { ...r, description: meta.summary } : r;
    });
}

export const fetchFeaturedRepos = unstable_cache(
  _fetchFeaturedRepos,
  ['github-repos'],
  { revalidate: 3600, tags: ['github'] },
);
