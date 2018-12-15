const rp = require('request-promise')
const R = require('ramda')

const apiConfig = require('./request-body')
const makeParam = require('./params')

const getResponse = reqObj => 
  getTypeParam(reqObj) !== 'N'
  ? 'total_de_paginas'
  : 'nTotPaginas'

const getTypeParam = reqObj =>
  reqObj.body.param[0].pagina !== undefined
  ? 'default'
  : 'N'

const getTotalPages = async reqObj => {
  console.log(reqObj)
  const typeParam = getResponse(reqObj)
  const responseData = await rp(reqObj)
  const totalPages = R.prop(typeParam, responseData)
  return totalPages
}

const request = async (totalPages) => {
  if(totalPages == 0) return
  //const newParamsBody = R.merge(paramsBody.param[0], {'pagina': totalPages})
  // const paramToArray = R.append(newParamsBody, [])
  //nst newBody = R.merge(reqObj.body, {'param': newParamsBody})
  //nst newOptions = R.merge(options, {'body': newBody})
  
  //console.log('Reqs>>', newParamsBody)

  request(--totalPages)
}

const makeRequest = async reqObj => {
  const totalPages = await getTotalPages(reqObj)
  const requestData = await request(reqObj, 1)
  console.log(`${reqObj.body.call} - ${totalPages}`)
  
  const request = async (totalPages) => {
  if(totalPages == 0) return
  const newParamsBody = R.merge(paramsBody.param[0], {'pagina': totalPages})
  const paramToArray = R.append(newParamsBody, [])
  const newBody = R.merge(reqObj.body, {'param': newParamsBody})
  const newOptions = R.merge(options, {'body': newBody})
  
  //console.log('Reqs>>', newParamsBody)

  request(--totalPages)
}
}


const requests = R.map(makeRequest, apiConfig)
