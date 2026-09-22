function Table({ columns, rows, rowKey = (row) => row.id, rowClassName = () => '', caption }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-raised shadow-sm">
      {caption ? <p className="sr-only">{caption}</p> : null}

      <table className="hidden w-full border-collapse lg:table">
        <thead>
          <tr className="bg-surface-sunken text-left">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`p-3 text-label font-bold tracking-label text-ink-muted uppercase ${
                  col.align === 'right' ? 'text-right' : ''
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              className={`border-t border-border transition-colors duration-150 hover:bg-surface-sunken ${rowClassName(row)}`}
            >
              {columns.map((col) => (
                <td key={col.key} className={`p-3 text-body text-ink ${col.align === 'right' ? 'text-right' : ''}`}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="flex flex-col gap-3 p-3 lg:hidden">
        {rows.map((row) => (
          <li
            key={rowKey(row)}
            className={`flex flex-col gap-2 rounded-lg border border-border p-4 ${rowClassName(row)}`}
          >
            {columns
              .filter((col) => col.header)
              .map((col) => (
                <div key={col.key} className="flex items-baseline justify-between gap-3">
                  <span className="text-label font-bold tracking-label text-ink-faint uppercase">{col.header}</span>
                  <span className="text-right text-body font-semibold text-ink">
                    {col.render ? col.render(row) : row[col.key]}
                  </span>
                </div>
              ))}
            {columns
              .filter((col) => !col.header)
              .map((col) => (
                <div key={col.key} className="pt-1 text-right">
                  {col.render ? col.render(row) : row[col.key]}
                </div>
              ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Table
