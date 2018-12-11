const rp = require('request-promise')
const R = require('ramda')

const paramsBody = {
  "call":"ListarCategorias",
  "app_key":"1560731700",
  "app_secret":"226dcf372489bb45ceede61bfd98f0f1",
  "param":[{
    "pagina":1,
    "registros_por_pagina":50,
  }]
}

const options = {
  method: 'POST',
  uri: 'https://app.omie.com.br/api/v1/geral/categorias/',
  body: paramsBody,
  json: true

}

const getTotalPages = async () => {
  const responseData = await rp(options)
  const totalPages = R.prop('total_de_paginas', responseData)
  console.log(totalPages)
  return totalPages
}

const request = async (totalPages) => {
  //const totalPages = await getTotalPages()
  if(totalPages === 0) return
  const newParamsBody = R.merge(paramsBody.param[0], {'pagina': totalPages})
  const paramToArray = R.append(newParamsBody, [])
  const newBody = R.merge(paramsBody, {'param': newParamsBody})
  const newOptions = R.merge(options, {'body': newBody})
  
  console.log(paramToArray)

  request(--totalPages)
}

request(3)
