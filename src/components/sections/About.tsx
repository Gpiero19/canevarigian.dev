import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">About</h2>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
          {profile.bio}
        </p>
        <div className="space-y-4">
          {profile.skillCategories.map((category) => (
            <div key={category.label} className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="w-24 shrink-0 text-sm font-semibold text-foreground">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-muted px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
