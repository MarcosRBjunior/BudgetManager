import { AlertTriangleIcon, CheckIcon, InfoIcon } from '../icons'

const TONE_CLASS = {
  success: 'bg-success-subtle text-success',
  danger: 'bg-danger-subtle text-danger',
  warning: 'bg-warning-subtle text-warning',
  info: 'bg-info-subtle text-info',
}

const TONE_ICON = {
  success: CheckIcon,
  danger: AlertTriangleIcon,
  warning: AlertTriangleIcon,
  info: InfoIcon,
}

function Alert({ tone = 'info', children, className = '' }) {
  const Icon = TONE_ICON[tone]

  return (
    <div
      role={tone === 'danger' ? 'alert' : 'status'}
      className={`flex items-start gap-3 rounded-xl p-4 text-body ${TONE_CLASS[tone]} ${className}`}
    >
      <Icon size={18} className="mt-0.5 flex-none" />
      <div className="text-ink">{children}</div>
    </div>
  )
}

export default Alert
