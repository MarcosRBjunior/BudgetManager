const TONE_CLASS = {
  neutral: 'bg-surface-sunken text-ink-muted',
  success: 'bg-success-subtle text-success',
  danger: 'bg-danger-subtle text-danger',
  warning: 'bg-warning-subtle text-warning',
}

function Badge({ tone = 'neutral', icon = null, children }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-caption font-medium ${TONE_CLASS[tone]}`}
    >
      {icon ? (
        <span className="flex-none" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  )
}

export default Badge
