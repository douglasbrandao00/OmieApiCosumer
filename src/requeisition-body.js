/*
 * This module shoud return the requesition body
 */
global.omieUri = "https://app.omie.com.br/api/v1/"

const R = require('ramda')
const typeOfParam = typeParam =>
  typeParam.toLowerCase() === 'n'
  ?  paramN
  :  paramDefault

const paramN = [{"nPagina":1, "nRegPorPagina":20 }]

const paramDefault = [{"pagina":1,"registros_por_pagina":20}]

const defaultBody = {
  "call":"ListarCategorias",
  "app_key":"1560731700",
  "app_secret":"226dcf372489bb45ceede61bfd98f0f1",
  "param": typeOfParam('N')
}

const requestSetup = configCall =>{
  return {
    method: 'POST',
    uri: `${omieUri}${configCall.serviceGroup}/${configCall.service}/`,
    body: {
      "call":"ListarCategorias",
      "app_key":"1560731700",
      "app_secret":"226dcf372489bb45ceede61bfd98f0f1",
      "param": typeOfParam('N')
    },
    json: true
  }
}

console.log(defaultBody)
