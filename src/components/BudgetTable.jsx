import { useState } from 'react'

const REMOVE_ANIMATION_MS = 200

function BudgetTable({ budgetData, onRemoveRow }) {
  const [removingId, setRemovingId] = useState(null)

  function handleRemoveClick(id, index) {
    setRemovingId(id)
    setTimeout(() => {
      onRemoveRow(index)
      setRemovingId(null)
    }, REMOVE_ANIMATION_MS)
  }

  return (
    <div className="mt-6 overflow-x-auto rounded-lg bg-white shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left text-sm text-gray-600">
            <th className="p-3">Compra</th>
            <th className="p-3">Categoria</th>
            <th className="p-3">Data</th>
            <th className="p-3">Custo</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {budgetData.map((row, index) => (
            <tr
              key={row.id}
              className={`animate-row-fade-in border-t border-gray-200 transition-all duration-200 hover:bg-gray-50 ${
                removingId === row.id ? 'row-fade-out' : ''
              }`}
            >
              <td className="p-3">{row.compra}</td>
              <td className="p-3">{row.categoria}</td>
              <td className="p-3">{row.data}</td>
              <td className="p-3">{row.custo}</td>
              <td className="p-3 text-right">
                <button
                  type="button"
                  onClick={() => handleRemoveClick(row.id, index)}
                  className="rounded bg-red-100 px-3 py-1 text-sm text-red-700 transition-colors hover:bg-red-200"
                >
                  Remover linha
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BudgetTable
