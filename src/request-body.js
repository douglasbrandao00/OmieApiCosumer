/*
 * This module shoud return the requesition body
 */

const R = require('ramda')

const apiInfo = require('./mocks/join-enterprises-services')
const makeParam = require('./params')

const paramBody = R.map(obj => {
  const param = makeParam(obj.paramType)
  const objWithParam = R.merge(obj, {'param': param})
  const objParamBody = R.dissoc('paramType', objWithParam)
  return objParamBody
} , apiInfo)

const requestSetup = configCall =>({
    method: 'POST',
    uri: configCall.url,
    body: {
      "call": configCall.call,
      "app_key": configCall.app_key,
      "app_secret": configCall.app_secret,
      "param": configCall.param
    },
    json: true
  })

const requestBody = R.map(requestSetup, paramBody)

module.exports = requestBody
