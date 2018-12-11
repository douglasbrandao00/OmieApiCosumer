const R = require('ramda')

const enterprises = require('./enterprises')
const services = require('./services')

const LOG = x => {
  console.log(x)
  return x
}

enterprises.map(enterprise => {
  const enterpriseService = enterprise.service
})
