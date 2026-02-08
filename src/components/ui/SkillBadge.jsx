export default function SkillBadge({ skill }) {
  return (
    <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-text-secondary transition-colors hover:border-accent hover:text-accent">
      {skill}
    </span>
  )
}
