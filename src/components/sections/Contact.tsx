import { profile } from '@/data/profile';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-xl text-center">
        <span className="font-mono text-xs font-medium text-[rgb(118_200_84)] tracking-widest uppercase block mb-5">
          04. Contact
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
          Let&apos;s build<br />something.
        </h2>
        <p className="text-base leading-relaxed text-[rgb(158_156_168)] mb-2">
          Available for full-stack and frontend roles — remote or on-site in Copenhagen.
        </p>
        <p className="text-sm text-[rgb(98_96_108)] mb-12">
          EU citizen · Danish residence permit · No sponsorship required.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {/* LinkedIn */}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgb(51_46_103)] px-7 py-3.5 text-sm font-medium text-[rgb(158_156_168)] transition-all duration-200 hover:bg-[rgb(0_119_181/0.12)] hover:border-[rgb(0_119_181)] hover:text-[rgb(0_119_181)] no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.5H4.75V24H.25V8.5zm7.25 0H12v2.16h.06C12.73 9.14 14.4 8 16.5 8c4.56 0 5.5 3 5.5 6.9V24h-4.5v-8.22c0-1.96-.04-4.48-2.73-4.48-2.73 0-3.15 2.13-3.15 4.33V24H7.5V8.5z" />
            </svg>
            LinkedIn
          </a>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgb(51_46_103)] px-7 py-3.5 text-sm font-medium text-[rgb(158_156_168)] transition-all duration-200 hover:bg-[rgb(76_175_80/0.05)] hover:border-[rgb(118_200_84)] hover:text-[rgb(118_200_84)] no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-10 7L2 7"></path>
            </svg>
            Email
          </a>

          {/* GitHub */}
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgb(51_46_103)] px-7 py-3.5 text-sm font-medium text-[rgb(158_156_168)] transition-all duration-200 hover:bg-[rgb(36_34_50/0.6)] hover:border-[rgb(80_75_100)] hover:text-[rgb(210_208_218)] no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
