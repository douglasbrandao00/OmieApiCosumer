module.exports = (url, apiCall, appKey, appSecret, pageNumber, registrerPerPage) => {
  return {
  uri: url,
  method: "POST",
  json: true,
  body: {
    "call":apiCall,
    "app_key": appKey,
    "app_secret": appSecret,
    "param":
      [
        {
          "pagina": pageNumber,
          "registros_por_pagina": registrerPerPage,
        }
      ]
  }

}}
