const typeOfParam = (typeParam, page = 1) =>
  typeParam.toLowerCase() === 'n'
  ?  paramN(page)
  :  paramDefault(page)

const paramN = page => ([{"nPagina":1, "nRegPorPagina":20 }])

const paramDefault = page => ([{"pagina":1,"registros_por_pagina":20}])

module.exports = typeOfParam
