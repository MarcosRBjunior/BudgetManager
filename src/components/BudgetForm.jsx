import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'
import { PlusIcon } from '../icons'

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
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-4">
        <div className="min-w-40 flex-1">
          <Input label="Compra" value={compra} onChange={(event) => setCompra(event.target.value)} />
        </div>

        <div className="min-w-40 flex-1">
          <Input label="Categoria" value={categoria} onChange={(event) => setCategoria(event.target.value)} />
        </div>

        <div className="min-w-40 flex-1">
          <Input label="Data" type="date" value={data} onChange={(event) => setData(event.target.value)} />
        </div>

        <div className="min-w-40 flex-1">
          <Input
            label="Custo"
            type="number"
            step="0.01"
            min="0"
            value={custo}
            onChange={(event) => setCusto(event.target.value)}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} icon={<PlusIcon size={16} />}>
          {isSubmitting ? 'Adicionando...' : 'Adicionar linha'}
        </Button>
      </form>
    </Card>
  )
}

export default BudgetForm
