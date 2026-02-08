import AnimatedElement from './AnimatedElement'

export default function SectionHeading({ title, subtitle }) {
  return (
    <AnimatedElement variant="fadeUp" className="mb-12 md:mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-text-secondary">{subtitle}</p>
      )}
    </AnimatedElement>
  )
}
