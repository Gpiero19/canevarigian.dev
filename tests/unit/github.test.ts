import { describe, it, expect, vi, beforeEach } from 'vitest';

// unstable_cache passes through in tests (no caching)
vi.mock('next/cache', () => ({
  unstable_cache: (fn: unknown) => fn,
}));

// config must be mocked before importing github
vi.mock('@/lib/config', () => ({
  config: { githubToken: null, siteUrl: 'http://localhost:3000' },
}));

const { fetchFeaturedRepos } = await import('@/lib/github');

const mockRepos = [
  {
    name: 'ShowFreak',
    description: 'A cool app',
    language: 'TypeScript',
    stars: 3,
    url: 'https://github.com/Gpiero19/ShowFreak',
  },
  {
    name: 'Other',
    description: null,
    language: null,
    stars: 0,
    url: 'https://github.com/Gpiero19/Other',
  },
];

function mockFetch(data: unknown, ok = true) {
  global.fetch = vi.fn().mockResolvedValue({
    ok,
    status: ok ? 200 : 500,
    json: async () => data,
  } as Response);
}

function toApiShape(repos: typeof mockRepos) {
  return repos.map((r) => ({
    name: r.name,
    description: r.description,
    language: r.language,
    stargazers_count: r.stars,
    html_url: r.url,
  }));
}

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('fetchFeaturedRepos', () => {
  it('returns only featured repos in order', async () => {
    mockFetch(toApiShape(mockRepos));
    const result = await fetchFeaturedRepos('Gpiero19', ['ShowFreak']);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('ShowFreak');
    expect(result[0].stars).toBe(3);
  });

  it('falls back to static data on API error', async () => {
    mockFetch(null, false);
    const result = await fetchFeaturedRepos('Gpiero19', ['ShowFreak']);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name).toBe('ShowFreak');
  });

  it('returns empty array when featured repo not found', async () => {
    mockFetch(toApiShape(mockRepos));
    const result = await fetchFeaturedRepos('Gpiero19', ['NonExistent']);
    expect(result).toHaveLength(0);
  });
});
