import { useState } from 'react'
import { INPUT_CLASS } from '../inputClassName'
import { formatarMoeda } from '../formatarMoeda'

function BudgetStatsDashboard({ gasto }) {
  const [orcamentoTotal, setOrcamentoTotal] = useState('')

  const total = Number(orcamentoTotal) || 0
  const restante = total - gasto

  return (
    <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-4 shadow-sm sm:grid-cols-3">
      <div className="flex flex-col">
        <label htmlFor="orcamento-total" className="text-sm text-gray-600">
          Orçamento total
        </label>
        <input
          id="orcamento-total"
          type="number"
          step="0.01"
          value={orcamentoTotal}
          onChange={(event) => setOrcamentoTotal(event.target.value)}
          placeholder="0"
          className={`mt-1 ${INPUT_CLASS}`}
        />
      </div>

      <div className="flex flex-col justify-end">
        <span className="text-sm text-gray-600">Gasto</span>
        <span className="text-xl font-semibold text-gray-900">{formatarMoeda(gasto)}</span>
      </div>

      <div className="flex flex-col justify-end">
        <span className="text-sm text-gray-600">Restante</span>
        <span
          className={`text-xl font-semibold transition-colors ${
            restante < 0 ? 'text-red-600' : 'text-emerald-600'
          }`}
        >
          {formatarMoeda(restante)}
        </span>
      </div>
    </div>
  )
}

export default BudgetStatsDashboard
