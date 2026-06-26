import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-[90vh] items-center px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>
        <p className="mb-4 text-xl font-medium text-muted-foreground sm:text-2xl">
          {profile.title}
        </p>
        <p className="mb-10 max-w-xl text-muted-foreground">{profile.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Email
          </a>
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
