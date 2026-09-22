function IconBase({ size = 20, strokeWidth = 1.75, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14M5 12h14" />
    </IconBase>
  )
}

export function FilterIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 5h16l-6.2 7.2v5.6l-3.6 2v-7.6L4 5z" />
    </IconBase>
  )
}

export function WalletIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M16 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1" />
      <circle cx="16.5" cy="13" r="1.1" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function ReceiptIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 3h12v18l-2.5-1.7L14 21l-2-1.7L10 21l-1.5-1.7L6 21V3z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </IconBase>
  )
}

export function AlertTriangleIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 4.2 21 19.5H3L12 4.2z" />
      <path d="M12 10.3v4" />
      <circle cx="12" cy="16.8" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function InfoIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11.2v5" />
      <circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function CheckIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 13l4 4L19 7" />
    </IconBase>
  )
}

export function XIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </IconBase>
  )
}

export function TrashIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" />
      <path d="M10 11v6M14 11v6" />
    </IconBase>
  )
}

export function InboxIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 12h4l2 3h4l2-3h4" />
      <path d="M4 12V6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V12" />
      <path d="M4 12v5.5A1.5 1.5 0 0 0 5.5 19h13a1.5 1.5 0 0 0 1.5-1.5V12" />
    </IconBase>
  )
}
