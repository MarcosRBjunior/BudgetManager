const PADDING_CLASS = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

function Card({ title, action, padding = 'md', className = '', children }) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface-raised shadow-sm ${PADDING_CLASS[padding]} ${className}`}
    >
      {title || action ? (
        <div className="mb-4 flex items-center justify-between gap-4">
          {title ? <h2 className="text-heading-sm font-semibold text-ink">{title}</h2> : <span />}
          {action ? <div>{action}</div> : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}

export default Card
