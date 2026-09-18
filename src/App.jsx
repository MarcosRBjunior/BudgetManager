import { useEffect, useState } from 'react'
import BudgetForm from './components/BudgetForm'
import BudgetTable from './components/BudgetTable'
import { loadBudgetData, addRowToSheets } from './services/sheet2api'

function App() {
  const [budgetData, setBudgetData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [addError, setAddError] = useState(null)

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

  function removeRow(index) {
    setBudgetData((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">
        Gerenciador de Orçamento
      </h1>

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
        <BudgetTable budgetData={budgetData} onRemoveRow={removeRow} />
      )}
    </main>
  )
}

export default App
