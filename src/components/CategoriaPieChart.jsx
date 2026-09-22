import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Card from './Card'
import EmptyState from './EmptyState'
import { corDaCategoria } from '../corDaCategoria'
import { formatarMoeda } from '../formatarMoeda'

function CategoriaPieChart({ custosPorCategoria }) {
  return (
    <Card title="Por categoria">
      {custosPorCategoria.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="h-64">
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
      )}
    </Card>
  )
}

export default CategoriaPieChart
