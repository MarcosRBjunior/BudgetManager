import { useState } from 'react'
import BudgetForm from './components/BudgetForm'
import BudgetTable from './components/BudgetTable'

function App() {
  const [budgetData, setBudgetData] = useState([])

  function addRow(compra, categoria, data, custo) {
    setBudgetData((prev) => [
      ...prev,
      { id: crypto.randomUUID(), compra, categoria, data, custo },
    ])
  }

  function removeRow(index) {
    setBudgetData((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">
        Gerenciador de Orçamento
      </h1>
      <BudgetForm onAddRow={addRow} />
      <BudgetTable budgetData={budgetData} onRemoveRow={removeRow} />
    </main>
  )
}

export default App
