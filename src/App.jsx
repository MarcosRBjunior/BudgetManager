import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import BudgetForm from './components/BudgetForm'
import BudgetTable from './components/BudgetTable'
import BudgetStatsDashboard from './components/BudgetStatsDashboard'
import TodosOsCustos from './components/TodosOsCustos'
import { loadBudgetData, addRowToSheets } from './services/sheet2api'
import { INPUT_CLASS } from './inputClassName'

const CategoriaPieChart = lazy(() => import('./components/CategoriaPieChart'))

function paraNumero(valor) {
  return Number(String(valor).replace(',', '.')) || 0
}

function normalizarData(valor) {
  return String(valor || '').slice(0, 10)
}

function App() {
  const [budgetData, setBudgetData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [addError, setAddError] = useState(null)
  const [dataInicio, setDataInicio] = useState('')
  const [dataFim, setDataFim] = useState('')

  const filtroInvertido = Boolean(dataInicio && dataFim && dataInicio > dataFim)

  const filteredBudgetData = useMemo(() => {
    if (!dataInicio && !dataFim) return budgetData

    return budgetData.filter((row) => {
      const data = normalizarData(row.data)
      if (!data) return false
      if (dataInicio && data < dataInicio) return false
      if (dataFim && data > dataFim) return false
      return true
    })
  }, [budgetData, dataInicio, dataFim])

  const custosPorCategoria = useMemo(() => {
    const totaisPorCategoria = new Map()

    for (const row of filteredBudgetData) {
      const chave = row.categoria.trim().toLowerCase()
      const custoEmCentavos = Math.round(paraNumero(row.custo) * 100)
      const existente = totaisPorCategoria.get(chave)

      if (existente) {
        existente.totalEmCentavos += custoEmCentavos
      } else {
        totaisPorCategoria.set(chave, { categoria: row.categoria.trim(), totalEmCentavos: custoEmCentavos })
      }
    }

    return Array.from(totaisPorCategoria.values(), ({ categoria, totalEmCentavos }) => ({
      categoria,
      total: totalEmCentavos / 100,
    }))
  }, [filteredBudgetData])

  const gastoTotal = useMemo(
    () => custosPorCategoria.reduce((soma, { total }) => soma + total, 0),
    [custosPorCategoria]
  )

  useEffect(() => {
    let cancelled = false

    loadBudgetData()
      .then((rows) => {
        if (cancelled) return
        setBudgetData(rows.map((row) => ({ id: crypto.randomUUID(), ...row })))
      })
      .catch((error) => {
        if (cancelled) return
        setLoadError(error.message)
      })
      .finally(() => {
        if (cancelled) return
        setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  async function addRow(compra, categoria, data, custo) {
    setAddError(null)

    try {
      const savedRow = await addRowToSheets(compra, categoria, data, custo)
      setBudgetData((prev) => [...prev, { id: crypto.randomUUID(), ...savedRow }])
      return true
    } catch (error) {
      setAddError(error.message)
      return false
    }
  }

  function removeRow(id) {
    setBudgetData((prev) => prev.filter((row) => row.id !== id))
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Gerenciador de Orçamento</h1>

        <div className="flex items-end gap-3">
          <div className="flex flex-col">
            <label htmlFor="data-inicio" className="text-sm text-gray-600">
              De
            </label>
            <input
              id="data-inicio"
              type="date"
              value={dataInicio}
              onChange={(event) => setDataInicio(event.target.value)}
              className={INPUT_CLASS}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="data-fim" className="text-sm text-gray-600">
              Até
            </label>
            <input
              id="data-fim"
              type="date"
              value={dataFim}
              onChange={(event) => setDataFim(event.target.value)}
              className={INPUT_CLASS}
            />
          </div>
        </div>
      </div>

      {filtroInvertido && (
        <p className="mb-4 rounded border border-amber-300 bg-amber-50 p-3 text-sm text-amber-700">
          O campo "De" está depois do campo "Até" — ajuste o intervalo pra ver despesas.
        </p>
      )}

      {addError && (
        <p className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {addError}
        </p>
      )}

      <BudgetForm onAddRow={addRow} />

      {isLoading ? (
        <p className="mt-6 text-sm text-gray-500">Carregando dados...</p>
      ) : loadError ? (
        <p className="mt-6 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {loadError}
        </p>
      ) : (
        <>
          <div className="mt-6">
            <BudgetStatsDashboard gasto={gastoTotal} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <TodosOsCustos custosPorCategoria={custosPorCategoria} />
            <Suspense
              fallback={
                <div className="flex h-64 items-center justify-center rounded-lg bg-white p-4 text-sm text-gray-400 shadow-sm">
                  Carregando gráfico...
                </div>
              }
            >
              <CategoriaPieChart custosPorCategoria={custosPorCategoria} />
            </Suspense>
          </div>

          <BudgetTable budgetData={filteredBudgetData} onRemoveRow={removeRow} />
        </>
      )}
    </main>
  )
}

export default App
