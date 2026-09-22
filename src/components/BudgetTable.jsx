import { useState } from 'react'
import Button from './Button'
import Table from './Table'
import { formatarMoeda } from '../formatarMoeda'
import { TrashIcon } from '../icons'

const REMOVE_ANIMATION_MS = 200

function BudgetTable({ budgetData, onRemoveRow }) {
  const [removingIds, setRemovingIds] = useState(() => new Set())

  function handleRemoveClick(id) {
    setRemovingIds((prev) => new Set(prev).add(id))
    setTimeout(() => {
      onRemoveRow(id)
      setRemovingIds((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, REMOVE_ANIMATION_MS)
  }

  const columns = [
    { key: 'compra', header: 'Compra' },
    { key: 'categoria', header: 'Categoria' },
    { key: 'data', header: 'Data' },
    {
      key: 'custo',
      header: 'Custo',
      align: 'right',
      render: (row) => <span className="font-mono text-amount-sm">{formatarMoeda(row.custo)}</span>,
    },
    {
      key: 'acoes',
      header: '',
      align: 'right',
      render: (row) => (
        <Button variant="danger" size="sm" icon={<TrashIcon size={14} />} onClick={() => handleRemoveClick(row.id)}>
          Remover linha
        </Button>
      ),
    },
  ]

  return (
    <div className="mt-6">
      <Table
        columns={columns}
        rows={budgetData}
        caption="Despesas cadastradas"
        rowClassName={(row) =>
          `animate-row-fade-in transition-all duration-200 ${removingIds.has(row.id) ? 'row-fade-out' : ''}`
        }
      />
    </div>
  )
}

export default BudgetTable
