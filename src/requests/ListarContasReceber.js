const request = require('request');
const mongo = require('mongodb').MongoClient;

let getData = (number, appKey, appSecret) => {
    request.post({
        url:'http://app.omie.com.br/api/v1/financas/contareceber/',
        method: "POST",
        json: true,
        body: {
            "call":"ListarContasReceber",
            "app_key": appKey,
            "app_secret": appSecret,
            "param":
            [
                {
                "pagina": number,
                "registros_por_pagina": 1,
                }
            ]
        }
    }, function optionalCallback(err, httpResponse, body) {
        if (err) return console.log('error!!');
        if (httpResponse.statusCode === 200) {
                body.conta_receber_cadastro.forEach(iten => {
                  console.log({
                    app_key: appKey,
                    app_secret: appSecret,
                    iten: iten.distribicao
                  })
                })
        }
    });

    
};

getData(1, 2329251405, "ba709ff552af361ab5be06afab116601")

