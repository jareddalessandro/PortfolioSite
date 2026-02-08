const variants = {
  primary:
    'bg-accent text-background font-medium hover:bg-accent/90 shadow-lg shadow-accent/20',
  secondary:
    'border border-border text-text-primary hover:border-accent hover:text-accent',
  ghost:
    'text-text-secondary hover:text-accent',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer'

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
