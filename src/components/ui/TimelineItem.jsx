import AnimatedElement from './AnimatedElement'
import SkillBadge from './SkillBadge'

export default function TimelineItem({ item, index }) {
  return (
    <AnimatedElement
      variant={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
      delay={index * 0.1}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute top-0 left-[7px] h-full w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background" />

      {/* Content */}
      <div className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30">
        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-text-primary">{item.role}</h3>
          <span className="font-mono text-xs text-accent">{item.period}</span>
        </div>
        <p className="mb-3 text-sm text-text-secondary">
          {item.company} · {item.location}
        </p>
        <ul className="mb-4 space-y-1.5">
          {item.description.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <SkillBadge key={t} skill={t} />
          ))}
        </div>
      </div>
    </AnimatedElement>
  )
}
