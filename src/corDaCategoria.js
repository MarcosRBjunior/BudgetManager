const CORES = ['#006aff', '#a5670a', '#0f8b8d', '#7c5cbf', '#c026d3', '#0891b2', '#be185d']

export function corDaCategoria(categoria) {
  let hash = 0
  for (let i = 0; i < categoria.length; i++) {
    hash = (hash * 31 + categoria.charCodeAt(i)) % CORES.length
  }
  return CORES[hash]
}
