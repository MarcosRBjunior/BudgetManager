const FILL_CLASS = {
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

function ProgressBar({ value, max, label }) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : value > 0 ? 100 : 0
  const tone = pct >= 100 ? 'danger' : pct >= 80 ? 'warning' : 'success'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-body text-ink-muted">{label}</span>
        <span className="text-body font-semibold text-ink">{Math.round(pct)}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-surface-sunken"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-200 ${FILL_CLASS[tone]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
