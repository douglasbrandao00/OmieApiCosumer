const R = require('ramda')

const enterprises = require('./enterprises')
const services = require('./services')

const apiInfoRaw = R.map(enterprise =>  {
  const api = R.filter(x => enterprise.services.includes(x.call), services)
  const merge = R.merge(enterprise, {'apiCall' : api})
  return merge
}, enterprises)


const apiInfo = R.map(x => R.dissoc('services', x), apiInfoRaw)

const paramApi = x => {
  console.log(`Clente: ${x.app_name}`)
  const apiCall = x.apiCall
  const appRegister = R.dissoc('apiCall', x)
  const apiConfig = R.map(y => R.merge(y, appRegister) , apiCall)
  return apiConfig
}
const paramedApiInfo = R.flatten(R.map(paramApi, apiInfo))

module.exports = paramedApiInfo
