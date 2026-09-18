import { useState } from 'react'

function BudgetForm({ onAddRow }) {
  const [compra, setCompra] = useState('')
  const [categoria, setCategoria] = useState('')
  const [data, setData] = useState('')
  const [custo, setCusto] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (!compra || !categoria || !data || !custo || isSubmitting) return

    setIsSubmitting(true)
    const success = await onAddRow(compra, categoria, data, custo)
    setIsSubmitting(false)

    if (success) {
      setCompra('')
      setCategoria('')
      setData('')
      setCusto('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-end gap-3 rounded-lg bg-white p-4 shadow-sm"
    >
      <div className="flex flex-col">
        <label htmlFor="compra" className="text-sm text-gray-600">
          Compra
        </label>
        <input
          id="compra"
          type="text"
          value={compra}
          onChange={(event) => setCompra(event.target.value)}
          className="rounded border border-gray-300 px-3 py-2 transition-colors focus:border-purple-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="categoria" className="text-sm text-gray-600">
          Categoria
        </label>
        <input
          id="categoria"
          type="text"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
          className="rounded border border-gray-300 px-3 py-2 transition-colors focus:border-purple-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="data" className="text-sm text-gray-600">
          Data
        </label>
        <input
          id="data"
          type="date"
          value={data}
          onChange={(event) => setData(event.target.value)}
          className="rounded border border-gray-300 px-3 py-2 transition-colors focus:border-purple-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="custo" className="text-sm text-gray-600">
          Custo
        </label>
        <input
          id="custo"
          type="number"
          step="0.01"
          value={custo}
          onChange={(event) => setCusto(event.target.value)}
          className="rounded border border-gray-300 px-3 py-2 transition-colors focus:border-purple-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Adicionando...' : 'Adicionar linha'}
      </button>
    </form>
  )
}

export default BudgetForm
