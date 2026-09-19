import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import EstadoVazio from './EstadoVazio'
import { formatarMoeda } from '../formatarMoeda'

const CORES = ['#9333ea', '#2563eb', '#059669', '#d97706', '#dc2626', '#0891b2', '#c026d3']

function corDaCategoria(categoria) {
  let hash = 0
  for (let i = 0; i < categoria.length; i++) {
    hash = (hash * 31 + categoria.charCodeAt(i)) % CORES.length
  }
  return CORES[hash]
}

function CategoriaPieChart({ custosPorCategoria }) {
  if (custosPorCategoria.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-white p-4 shadow-sm">
        <EstadoVazio />
      </div>
    )
  }

  return (
    <div className="h-64 rounded-lg bg-white p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={custosPorCategoria}
            dataKey="total"
            nameKey="categoria"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {custosPorCategoria.map((entrada) => (
              <Cell
                key={entrada.categoria}
                fill={corDaCategoria(entrada.categoria.toLowerCase())}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatarMoeda(value)} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoriaPieChart
