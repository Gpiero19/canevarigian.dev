import Image from 'next/image';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import type { GitHubRepo } from '@/types/github';
import type { ProjectMeta } from '@/types/project-meta';

type Props = GitHubRepo & ProjectMeta & { index: number };

export default function ProjectCard({
  name,
  description,
  language,
  url,
  index,
  title,
  liveUrl,
  imageUrl,
  longDescription,
}: Props) {
  const displayTitle = title ?? name;
  const isEven = index % 2 === 0;
  const descParagraphs = longDescription?.split('\n\n') ?? [];

  return (
    <article className="grid gap-10 md:grid-cols-2 md:items-center">
      {/* Image */}
      <div
        className={`group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-border bg-muted ${isEven ? '' : 'md:order-last'}`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${displayTitle} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No preview
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div>
          {language && (
            <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {language}
            </p>
          )}
          <h3 className="text-2xl font-bold tracking-tight">{displayTitle}</h3>
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        {/* Case study */}
        {descParagraphs.length > 0 && (
          <details className="group/details">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open/details:rotate-180" />
              Case study
            </summary>
            <div className="mt-4 space-y-3 border-l border-border pl-4">
              {descParagraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </details>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-2.5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
