import { InboxIcon } from '../icons'

function EmptyState({ title = 'Nenhuma despesa encontrada.', description }) {
  return (
    <div className="flex flex-col items-center gap-2 py-10 text-center">
      <span className="mb-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-sunken text-ink-faint">
        <InboxIcon size={22} />
      </span>
      <p className="text-heading-sm font-semibold text-ink">{title}</p>
      {description ? <p className="max-w-[36ch] text-body text-ink-muted">{description}</p> : null}
    </div>
  )
}

export default EmptyState
