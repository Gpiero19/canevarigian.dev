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
        <h2 className="mb-16 text-3xl font-bold tracking-tight">Projects</h2>
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
