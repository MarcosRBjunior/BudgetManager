import { useState } from 'react'
import Badge from './Badge'
import Card from './Card'
import Input from './Input'
import ProgressBar from './ProgressBar'
import StatTile from './StatTile'
import { formatarMoeda } from '../formatarMoeda'
import { AlertTriangleIcon, CheckIcon, ReceiptIcon, WalletIcon } from '../icons'

function BudgetStatsDashboard({ gasto }) {
  const [orcamentoTotal, setOrcamentoTotal] = useState('')

  const total = Number(orcamentoTotal) || 0
  const restante = total - gasto
  const estourou = restante < 0

  return (
    <Card title="Orçamento">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          label="Orçamento total"
          type="number"
          step="0.01"
          value={orcamentoTotal}
          onChange={(event) => setOrcamentoTotal(event.target.value)}
          placeholder="0"
          icon={<WalletIcon size={16} />}
        />

        <StatTile label="Gasto" value={formatarMoeda(gasto)} icon={<ReceiptIcon size={18} />} />

        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface-raised p-6 shadow-sm">
          <span className="text-label font-bold tracking-label text-ink-muted uppercase">Restante</span>
          <span
            className={`font-mono text-amount-lg font-semibold transition-colors ${
              estourou ? 'text-danger' : 'text-success'
            }`}
          >
            {formatarMoeda(restante)}
          </span>
          <div>
            <Badge
              tone={estourou ? 'danger' : 'success'}
              icon={estourou ? <AlertTriangleIcon size={12} /> : <CheckIcon size={12} />}
            >
              {estourou ? 'Estourado' : 'Dentro do limite'}
            </Badge>
          </div>
        </div>
      </div>

      <ProgressBar label="Consumo do orçamento" value={gasto} max={total} />
    </Card>
  )
}

export default BudgetStatsDashboard
