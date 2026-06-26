import type { GitHubRepo } from '@/types/github';
import type { ProjectMeta } from '@/types/project-meta';
import { Star } from 'lucide-react';

type Props = GitHubRepo & Pick<ProjectMeta, 'caseStudyUrl'>;

export default function ProjectCard({
  name,
  description,
  language,
  stars,
  url,
  caseStudyUrl,
}: Props) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/40">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-snug">{name}</h3>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3 w-3" />
          {stars}
        </span>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {description ?? 'No description'}
      </p>
      <div className="flex items-center justify-between gap-2">
        {language && (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            {language}
          </span>
        )}
        <div className="ml-auto flex gap-2">
          {caseStudyUrl && (
            <a
              href={caseStudyUrl}
              className="text-xs font-medium underline underline-offset-2 hover:text-muted-foreground"
            >
              Case Study
            </a>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium underline underline-offset-2 hover:text-muted-foreground"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
