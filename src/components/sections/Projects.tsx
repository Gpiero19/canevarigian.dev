import { fetchFeaturedRepos } from '@/lib/github';
import { profile } from '@/data/profile';
import { featuredRepos } from '@/data/featured-repos';
import { projectMeta } from '@/data/project-meta';
import ProjectCard from '@/components/ui/ProjectCard';

export default async function Projects() {
  const repos = await fetchFeaturedRepos(profile.githubUsername, featuredRepos);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold tracking-tight">Projects</h2>
        {repos.length === 0 ? (
          <p className="text-muted-foreground">No projects to display.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <ProjectCard
                key={repo.name}
                {...repo}
                caseStudyUrl={projectMeta[repo.name]?.caseStudyUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
