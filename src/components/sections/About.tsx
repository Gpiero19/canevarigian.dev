import { profile } from '@/data/profile';

export default function About() {
  const bioParagraphs = profile.bio.split('\n\n');

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold tracking-tight">About</h2>

        <div className="grid gap-16 md:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            {bioParagraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>

          <div className="space-y-5">
            {profile.skillCategories.map((category) => (
              <div key={category.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-border bg-muted px-2.5 py-0.5 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
