import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">About</h2>
        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
          {profile.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {profile.techStack.map((tech) => (
            <span
              key={tech.name}
              className="rounded-md border border-border bg-muted px-3 py-1 text-sm font-medium"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
