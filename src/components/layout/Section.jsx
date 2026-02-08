export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 scroll-mt-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
