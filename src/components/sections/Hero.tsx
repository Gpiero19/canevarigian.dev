import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-dvh items-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <p className="animate-fade-up mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Full Stack Developer &middot; Copenhagen
        </p>

        <h1 className="animate-fade-up [animation-delay:100ms] mb-6 text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>

        <p className="animate-fade-up [animation-delay:200ms] mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="animate-fade-up [animation-delay:300ms] flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex cursor-pointer items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            LinkedIn
          </a>
          <a
            href={process.env.NEXT_PUBLIC_RESUME_URL ?? profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
