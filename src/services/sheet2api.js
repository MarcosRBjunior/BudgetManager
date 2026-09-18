const SHEET2API_URL = import.meta.env.VITE_SHEET2API_URL

function mapRowFromSheet(row) {
  return {
    compra: row.Compra ?? '',
    categoria: row.Categoria ?? '',
    data: row.Data ?? '',
    custo: row.Custo ?? '',
  }
}

// Sheet2API espera/devolve as colunas com o nome exato usado no cabeçalho da planilha.
function mapRowToSheet(compra, categoria, data, custo) {
  return { Compra: compra, Categoria: categoria, Data: data, Custo: custo }
}

export async function loadBudgetData() {
  const response = await fetch(SHEET2API_URL)

  if (!response.ok) {
    throw new Error(
      `Não foi possível carregar os dados da planilha (status ${response.status}).`
    )
  }

  const rows = await response.json()
  return rows.map(mapRowFromSheet)
}

export async function addRowToSheets(compra, categoria, data, custo) {
  const response = await fetch(SHEET2API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mapRowToSheet(compra, categoria, data, custo)),
  })

  if (!response.ok) {
    throw new Error(
      `Não foi possível salvar a linha na planilha (status ${response.status}).`
    )
  }

  return { compra, categoria, data, custo }
}
