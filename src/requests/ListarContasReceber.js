const request = require('request-promise');

const mock_customers = require('../models/mock_customers')
const requestBody = require('./requestBody/bodyTipe1')

request(
  requestBody(
    "http://app.omie.com.br/api/v1/financas/contareceber/",
    "ListarContasReceber",
    mock_customers[0].appKey,
    mock_customers[0].appSecret,
    1,
    50
  ))
  .then(result => result.total_de_paginas)
  .then(result2 => console.log(result2))
  .catch(err => console.error(err))



