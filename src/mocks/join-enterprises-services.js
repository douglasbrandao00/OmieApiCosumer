const R = require('ramda')

const enterprises = require('./enterprises')
const services = require('./services')

const getEnterpriseServices = enterprise => R.prop('services', enterprise)

const x = getEnterpriseServices(enterprises[0])

console.log(x)
//console.log(enterprises[0].services)
