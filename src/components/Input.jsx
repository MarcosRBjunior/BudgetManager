import { useId } from 'react'

function Input({ label, helperText, errorText, icon = null, id, className = '', ...rest }) {
  const autoId = useId()
  const inputId = id || autoId
  const hasError = Boolean(errorText)
  const describedBy = hasError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label ? (
        <label htmlFor={inputId} className="text-body font-semibold text-ink">
          {label}
        </label>
      ) : null}

      <div
        className={`flex h-10 items-center gap-2 rounded-lg border bg-surface-sunken px-4 transition-colors duration-150 focus-within:border-brand ${
          hasError ? 'border-danger' : 'border-border-strong'
        }`}
      >
        {icon ? (
          <span className="flex-none text-ink-faint" aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <input
          id={inputId}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          className="h-full w-full min-w-0 flex-1 bg-transparent text-body text-ink outline-none placeholder:text-ink-faint"
          {...rest}
        />
      </div>

      {hasError ? (
        <p id={`${inputId}-error`} role="alert" className="text-caption text-danger">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={`${inputId}-helper`} className="text-caption text-ink-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}

export default Input
