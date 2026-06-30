import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-dvh items-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(51_46_103)] bg-[rgb(22_18_37/0.6)] mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[rgb(118_200_84)] flex-shrink-0 animate-pulse"></span>
          <span className="text-xs font-medium text-[rgb(158_156_168)] tracking-widest uppercase">
            Available for full-stack &amp; frontend roles
          </span>
        </div>

        <h1 className="animate-fade-up [animation-delay:100ms] mb-6 text-7xl font-extrabold tracking-tight md:text-8xl leading-[0.93]">
          {profile.name.split(' ')[0]}
          <br />
          {profile.name.split(' ')[1]}
        </h1>

        {/* Accent divider */}
        <div className="w-11 h-0.5 bg-[rgb(118_200_84)] rounded mb-6 animate-fade-up [animation-delay:200ms]"></div>

        <p className="animate-fade-up [animation-delay:300ms] mb-10 max-w-2xl text-lg leading-relaxed text-[rgb(135_125_160)]">
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up [animation-delay:400ms] flex flex-wrap gap-2.5 mb-16">
          <a
            href="#projects"
            className="inline-flex cursor-pointer items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-87 no-underline"
          >
            View Projects
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[rgb(51_46_103)] px-5 py-2.5 text-sm font-medium text-[rgb(158_156_168)] transition-all duration-200 hover:bg-[rgb(0_119_181/0.12)] hover:border-[rgb(0_119_181)] hover:text-[rgb(0_119_181)] no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.5H4.75V24H.25V8.5zm7.25 0H12v2.16h.06C12.73 9.14 14.4 8 16.5 8c4.56 0 5.5 3 5.5 6.9V24h-4.5v-8.22c0-1.96-.04-4.48-2.73-4.48-2.73 0-3.15 2.13-3.15 4.33V24H7.5V8.5z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={process.env.NEXT_PUBLIC_RESUME_URL ?? profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[rgb(51_46_103)] px-5 py-2.5 text-sm font-medium text-[rgb(158_156_168)] transition-all duration-200 hover:bg-[rgb(76_175_80/0.05)] hover:border-[rgb(118_200_84)] hover:text-[rgb(118_200_84)] no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            Resume
          </a>
        </div>

        {/* Tech stack */}
        <div className="animate-fade-up [animation-delay:520ms]">
          <p className="font-mono text-[11px] font-semibold tracking-[2px] text-[rgb(98_96_108)] uppercase mb-2.5">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Python', 'Django'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 border border-[rgb(51_46_103)] rounded text-[rgb(128_115_180)] bg-[rgb(22_18_37/0.6)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
