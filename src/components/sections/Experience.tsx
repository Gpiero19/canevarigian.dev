import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Experience</h2>

        <div className="space-y-10">
          {experiences.map((entry, i) => (
            <div key={i} className="grid gap-1 sm:grid-cols-[200px_1fr]">
              <div className="pt-0.5">
                <p className="text-xs font-medium text-muted-foreground">{entry.period}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{entry.location}</p>
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3 className="text-base font-semibold leading-snug">{entry.role}</h3>
                  <span className="text-sm text-muted-foreground">{entry.company}</span>
                </div>
                <ul className="space-y-1">
                  {entry.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
