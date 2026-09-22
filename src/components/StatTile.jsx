function StatTile({ label, value, icon = null, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl border border-border bg-surface-raised p-6 shadow-sm ${className}`}>
      <div className="flex items-start justify-between gap-2">
        <span className="text-label font-bold tracking-label text-ink-muted uppercase">{label}</span>
        {icon ? (
          <span className="flex-none text-brand" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </div>
      <span className="font-mono text-amount-lg font-semibold text-ink">{value}</span>
    </div>
  )
}

export default StatTile
