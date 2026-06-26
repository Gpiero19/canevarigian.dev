import Image from 'next/image';
import { ExternalLink, Github, Star } from 'lucide-react';
import type { GitHubRepo } from '@/types/github';
import type { ProjectMeta } from '@/types/project-meta';

type Props = GitHubRepo & ProjectMeta & { index: number };

export default function ProjectCard({
  name,
  description,
  language,
  stars,
  url,
  index,
  title,
  liveUrl,
  imageUrl,
  longDescription,
}: Props) {
  const displayTitle = title ?? name;
  const isEven = index % 2 === 0;

  return (
    <article className="grid gap-8 md:grid-cols-2 md:items-center">
      <div
        className={`relative aspect-video overflow-hidden rounded-lg border border-border bg-muted ${isEven ? '' : 'md:order-last'}`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${displayTitle} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No preview
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight">{displayTitle}</h3>
          {stars > 0 && (
            <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3" />
              {stars}
            </span>
          )}
        </div>

        <p className="text-muted-foreground">{description ?? 'No description'}</p>

        {longDescription && (
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium underline underline-offset-2 hover:text-muted-foreground list-none">
              Case study ↓
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {longDescription}
            </p>
          </details>
        )}

        {language && (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            {language}
          </span>
        )}

        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
