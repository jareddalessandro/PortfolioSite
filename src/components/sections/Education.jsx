import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import AnimatedElement from '../ui/AnimatedElement'
import { education } from '../../data/education'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        title="Education"
        subtitle="My academic background."
      />

      <div className="mx-auto max-w-3xl space-y-6">
        {education.map((item, index) => (
          <AnimatedElement key={item.id} variant="fadeUp" delay={index * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.institution}</p>
                </div>
                <span className="font-mono text-xs text-accent">{item.period}</span>
              </div>

              {item.description && (
                <p className="mb-3 text-sm text-text-secondary">{item.description}</p>
              )}

              {item.coursework && (
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="inline-block rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-xs text-text-secondary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  )
}
