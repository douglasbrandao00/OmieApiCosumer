module.exports = [
  {
    url: 'https://app.omie.com.br/api/v1/geral/categorias/',
    call: 'ListarCategorias',
    paramType: 'default'
  },
  {
    url: 'https://app.omie.com.br/api/v1/financas/pesquisartitulos/',
    call: 'PesquisarLancamentos',
    paramType: 'N'
  }
]
