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
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs font-medium text-accent-green tracking-widest">01.</span>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <div className="flex-1 h-px bg-stroke"></div>
          </div>
          <p className="text-sm text-text-muted">Production-deployed. Click any project to see the case study.</p>
        </div>
        {repos.length === 0 ? (
          <p className="text-muted-foreground">No projects to display.</p>
        ) : (
          <div className="flex flex-col gap-20">
            {repos.map((repo, index) => (
              <ProjectCard
                key={repo.name}
                {...repo}
                {...projectMeta[repo.name]}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
