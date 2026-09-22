import Card from './Card'
import EmptyState from './EmptyState'
import { corDaCategoria } from '../corDaCategoria'
import { formatarMoeda } from '../formatarMoeda'

function TodosOsCustos({ custosPorCategoria }) {
  return (
    <Card title="Todos os custos">
      {custosPorCategoria.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="flex flex-col gap-3">
          {custosPorCategoria.map(({ categoria, total }) => (
            <li
              key={categoria}
              className="flex items-center justify-between gap-3 border-b border-border pb-3 last:border-b-0 last:pb-0"
            >
              <span className="flex items-center gap-2 text-body text-ink">
                <span
                  className="inline-block h-2.5 w-2.5 flex-none rounded-full"
                  style={{ backgroundColor: corDaCategoria(categoria.toLowerCase()) }}
                  aria-hidden="true"
                />
                {categoria}
              </span>
              <span className="font-mono text-amount-sm text-ink">{formatarMoeda(total)}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export default TodosOsCustos
