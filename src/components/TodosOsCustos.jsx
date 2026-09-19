import EstadoVazio from './EstadoVazio'
import { formatarMoeda } from '../formatarMoeda'

function TodosOsCustos({ custosPorCategoria }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-gray-600">Todos os custos</h2>

      {custosPorCategoria.length === 0 ? (
        <EstadoVazio />
      ) : (
        <ul className="space-y-2">
          {custosPorCategoria.map(({ categoria, total }) => (
            <li
              key={categoria}
              className="flex items-center justify-between border-b border-gray-100 pb-2 text-sm transition-colors last:border-b-0"
            >
              <span className="text-gray-700">{categoria}</span>
              <span className="font-medium text-gray-900">{formatarMoeda(total)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodosOsCustos
