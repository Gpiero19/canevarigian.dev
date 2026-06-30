import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs font-medium text-[oklch(70%_0.185_145)] tracking-widest">02.</span>
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <div className="flex-1 h-px bg-[oklch(16%_0.01_255)]"></div>
        </div>

        {/* Timeline */}
        <div className="relative pl-9">
          {/* Vertical line */}
          <div className="absolute left-1 top-2 bottom-2 w-px bg-[oklch(18%_0.01_255)]"></div>

          <div className="space-y-11">
            {experiences.map((entry, i) => {
              const isWork = entry.type === 'work';
              const dotColor = isWork ? 'bg-[oklch(70%_0.185_145)]' : 'bg-[oklch(65%_0.14_255)]';
              const dotShadow = isWork
                ? 'shadow-[0_0_0_3px_oklch(70%_0.185_145/0.2)]'
                : 'shadow-[0_0_0_3px_oklch(65%_0.14_255/0.2)]';
              const badgeColor = isWork
                ? 'text-[oklch(70%_0.185_145)] border-[oklch(70%_0.185_145/0.3)]'
                : 'text-[oklch(65%_0.14_255)] border-[oklch(65%_0.14_255/0.3)]';

              return (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-background ${dotColor} ${dotShadow}`}
                  ></div>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-5">
                    {/* Left: date & location */}
                    <div>
                      <p className="text-xs font-medium text-[oklch(44%_0.01_240)] leading-relaxed">
                        {entry.period}
                      </p>
                      <p className="text-xs text-[oklch(36%_0.01_240)] mt-0.5">
                        {entry.location}
                      </p>
                      <span
                        className={`inline-block font-mono text-xs font-medium px-2 py-1 border rounded-full mt-2 ${badgeColor}`}
                      >
                        {entry.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>

                    {/* Right: role & highlights */}
                    <div>
                      <div className="mb-3 flex flex-wrap items-baseline gap-2">
                        <h3 className="text-base font-semibold leading-snug">
                          {entry.role}
                        </h3>
                        <span className="text-sm text-[oklch(43%_0.01_240)]">
                          {entry.company}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {entry.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-sm leading-relaxed text-[oklch(50%_0.01_240)]"
                          >
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[oklch(33%_0.01_240)]" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
