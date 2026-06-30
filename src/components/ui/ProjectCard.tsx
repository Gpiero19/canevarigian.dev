import Image from 'next/image';
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
  techStack,
}: Props) {
  const displayTitle = title ?? name;
  const isEven = index % 2 === 0;
  const descParagraphs = longDescription?.split('\n\n') ?? [];

  return (
    <article className="grid gap-10 md:grid-cols-2 md:items-center">
      {/* Image with number badge */}
      <div
        className={`group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-[rgb(51_46_103)] bg-[rgb(22_18_37/0.8)] transition-all duration-300 hover:scale-[1.025] hover:shadow-[0_28px_72px_rgb(0_0_0/0.55)] ${
          isEven ? '' : 'md:order-last'
        }`}
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
          <div className="flex h-full items-center justify-center text-sm text-[rgb(98_96_108)]">
            No preview
          </div>
        )}
        {/* Number badge */}
        <div className="absolute top-3 left-3 font-mono text-xs font-medium text-[rgb(118_200_84)] bg-[rgb(22_18_37/0.9)] px-2 py-1 rounded backdrop-blur">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {/* Language tag */}
        {language && (
          <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[rgb(118_200_84)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(118_200_84)]" />
            {language}
          </p>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight">{displayTitle}</h3>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-[rgb(152_150_160)]">{description}</p>

        {/* Tech stack chips */}
        {(techStack ?? (language ? [language] : [])).length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {(techStack ?? [language!]).map((tech) => (
              <span key={tech} className="font-mono text-xs px-2.5 py-1 border border-[rgb(51_46_103)] rounded text-[rgb(158_156_168)] bg-[rgb(22_18_37/0.6)]">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Case study accordion */}
        {descParagraphs.length > 0 && (
          <details className="group/details">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-[rgb(158_156_168)] transition-colors hover:text-foreground">
              <span className="transition-transform duration-200 group-open/details:rotate-180">↓</span>
              Case study
            </summary>
            <div className="mt-4 space-y-3 border-l border-[rgb(51_46_103)] pl-4">
              {descParagraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-[rgb(158_156_168)]">
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
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 no-underline"
            >
              ↗ Live Demo
            </a>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[rgb(51_46_103)] px-4 py-2 text-sm font-medium text-[rgb(158_156_168)] transition-all duration-200 hover:bg-[rgb(36_34_50/0.6)] hover:border-[rgb(80_75_100)] hover:text-[rgb(210_208_218)] no-underline"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
