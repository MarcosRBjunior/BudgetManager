const VARIANT_CLASS = {
  primary: 'bg-brand text-on-brand hover:bg-brand-strong',
  secondary: 'bg-surface-raised text-ink border border-border-strong hover:bg-surface-sunken',
  ghost: 'bg-transparent text-ink hover:bg-surface-sunken',
  danger: 'bg-danger text-on-danger hover:opacity-90',
}

const SIZE_CLASS = {
  md: 'h-10 px-5',
  sm: 'h-8 px-4',
}

function Button({ variant = 'primary', size = 'md', icon = null, disabled = false, className = '', children, ...rest }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-45 ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className}`}
      {...rest}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </button>
  )
}

export default Button
