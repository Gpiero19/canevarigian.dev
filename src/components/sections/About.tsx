import { profile } from '@/data/profile';

export default function About() {
  const bioParagraphs = profile.bio.split('\n\n');

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs font-medium text-accent-green tracking-widest">03.</span>
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <div className="flex-1 h-px bg-stroke"></div>
        </div>

        <div className="grid gap-16 md:grid-cols-[1fr_300px]">
          {/* Bio */}
          <div>
            {/* Pull quote */}
            <blockquote className="border-l-[3px] border-accent-green pl-5 mb-7">
              <p className="text-lg sm:text-xl font-semibold leading-tight tracking-tight text-text-bright">
                My engineering background means I think in systems before I write code.
              </p>
            </blockquote>

            {/* Body paragraphs */}
            <div className="space-y-4">
              {bioParagraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-text-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-5">
            {profile.skillCategories.map((category) => (
              <div key={category.label}>
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-green mb-2">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-stroke bg-surface px-2.5 py-1 text-xs font-medium text-text-muted"
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
