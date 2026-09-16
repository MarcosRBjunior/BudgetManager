# Projeto 03 — Gerenciador de Orçamento

**Nível:** Básico
**Conhecimentos requeridos:** Front-end
**Programa:** Boost Program — by Yuri Pereira

---

## Briefing

Crie um **gerenciador de orçamento** para rastrear e gerenciar finanças e despesas.

Gerenciar finanças é difícil. Acompanhar tudo o que você comprou inclui muita matemática que ninguém quer fazer.

Além disso, você pode não estar disposto a fornecer a uma empresa da web todos os seus dados financeiros para fazer isso por você.

---

## Tech Stack

- React
- TailwindCSS
- ViteJS
- Vercel (conhecimento básico de serverless)

## Libraries

- Google Sheets API
- Sheet2API

---

## Wireframe

Tela única de **Orçamento** contendo:

- Filtro por **intervalo de data** (campo "de" e "até") no topo direito
- Um **gráfico de pizza** representando a distribuição dos custos
- Uma lista **"Todos os custos"** ao lado do gráfico
- Uma tabela abaixo com as colunas:
  - Compra
  - Categoria
  - Data
  - Custo

---

## Por que ViteJS em vez de NextJS?

Boa parte dos projetos do guia são **Full-stack**. Este projeto é **somente front-end**, então não há necessidade de aumentar a complexidade adicionando NextJS.

➡️ Use **ViteJS**. Siga a documentação oficial em [vitejs.dev](https://vitejs.dev) para instalar no novo projeto, e depois siga as etapas abaixo.

> Como este projeto usa apenas recursos de front-end, capriche nas transições, animações e estilos!

---

## Níveis do Projeto

### Nível 1 — Tabela editável

A forma mais comum de olhar para dados financeiros é uma tabela — boa maneira de classificar visualmente grandes quantidades de dados usando colunas para somar números.

- Crie uma **tabela editável** na qual você pode adicionar despesas como linhas.

### Nível 2 — Integração com Google Sheets

Ter um site estático onde gerenciamos recursos no código é útil e eficiente, mas talvez não seja a maneira mais fácil de gerenciá-lo.

- Adicione seu orçamento ao **Google Sheets** e use o **Sheet2API** para acessar os dados.

### Nível 3 — Painel de estatísticas

Tabelas são úteis, mas às vezes você quer uma visão geral simples em vez de escolher cada linha e descobrir por conta própria.

- Crie um **painel de estatísticas** com as informações que você precisaria para uma rápida olhada.
- **Desafio extra:** crie um **date-picker** para filtrar por datas a seleção de orçamento.

---

## Requisitos Detalhados

### 1. Criar tabela

- Crie um componente React chamado `BudgetTable`.
- No componente `BudgetTable`, crie uma tabela com duas colunas: **Categoria** e **Quantidade**.
- No componente, crie uma função chamada `addRow` que recebe uma categoria e uma quantidade como argumentos.
- Na função `addRow`, adicione uma nova linha à tabela com a categoria e a quantidade especificadas.
- Renderize o componente `BudgetTable` no componente `App`.

### 2. Adicionar linhas de dados

- Crie uma variável de estado chamada `budgetData` no componente `App`.
- No componente `App`, adicione uma função chamada `loadBudgetData` que carrega os dados do orçamento de uma API — no caso, usando o **Sheet2API**, que converte o spreadsheet numa API para consumo e inserção de dados.
- Na função `loadBudgetData`, retorne um array de objetos, cada um com uma propriedade `categoria` e `quantidade`.
- No componente `App`, use o hook `useState` para definir a variável de estado `budgetData` com o valor retornado por `loadBudgetData`.
- No componente `BudgetTable`, use a variável de estado `budgetData` para preencher a tabela com os dados.

### 3. Adicionar formulário para adicionar linhas

- Crie um componente React chamado `BudgetForm`.
- No componente `BudgetForm`, crie um formulário com dois campos de entrada: **categoria** e **quantidade**.
- No componente `BudgetForm`, crie um botão chamado **"Adicionar linha"** e as funções necessárias para adicionar uma linha.

### 4. Adicionar a capacidade de remover linha

- No componente `BudgetTable`, adicione um botão a cada linha chamado **"Remover linha"**.
- No botão "Remover linha", chame a função `removeRow` no componente `BudgetTable` com o índice da linha a ser removida.

### 5. Adicionar dados ao Sheets

- Crie uma planilha do **Google Sheets**.
- Na planilha, crie uma aba/planilha chamada **Orçamento**.
- Na planilha **Orçamento**, crie duas colunas: **Categoria** e **Quantidade**.
- No componente `BudgetTable`, chame a função `addRowToSheets` com os valores dos campos de entrada categoria e quantidade.
- A função `addRowToSheets` deve pegar os valores dos campos de entrada categoria e quantidade e adicioná-los à planilha Budget no Google Sheets.

### 6. Obter dados da API

- Vamos utilizar o **Sheet2API** — ele irá servir como nosso "database".

### 7. Usar Google OAuth (opcional)

- Crie um cliente **Google OAuth**.
- No componente `App`, chame a função `authenticateUser` para autenticar o usuário com o Google OAuth.
- A função `authenticateUser` deve chamar o cliente Google OAuth para autenticar o usuário e retornar o ID do usuário.
- No componente `BudgetTable`, use o ID do usuário para obter os dados do orçamento do usuário na API.

### 8. Adicionar painel de estatísticas

- Crie um componente React chamado `BudgetStatsDashboard`.
- No componente `BudgetStatsDashboard`, crie um gráfico que mostra o orçamento **total**, **gasto** e **restante**.
- No componente `BudgetStatsDashboard`, use a variável de estado `budgetData` para preencher o gráfico com os dados.

---

## Checklist resumido

- [ ] Setup do projeto com ViteJS + React + TailwindCSS
- [ ] Componente `BudgetTable` (tabela com Categoria/Quantidade + `addRow`)
- [ ] Estado `budgetData` + função `loadBudgetData` (via Sheet2API)
- [ ] Componente `BudgetForm` (campos + botão "Adicionar linha")
- [ ] Função `removeRow` + botão "Remover linha"
- [ ] Planilha Google Sheets "Orçamento" com colunas Categoria/Quantidade
- [ ] Função `addRowToSheets`
- [ ] (Opcional) Google OAuth + `authenticateUser`
- [ ] Componente `BudgetStatsDashboard` (total, gasto, restante)
- [ ] (Desafio extra) Date-picker para filtrar por intervalo de datas
- [ ] Deploy na Vercel
