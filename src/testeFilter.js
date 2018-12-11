const R = require('ramda')

const enterprises = require('./mocks/enterprises')
const services = require('./mocks/services')

/*
console.log(services)
console.log('###############')

console.log(enterprises)
console.log('###############')

  for ( const enterprise of enterprises ) {
  console.log(enterprise)
  const api = R.filter(x => enterprise.services.includes(x.call), services)
  console.log(api)
}*/
const apiInfoRaw = R.map(enterprise =>  {
  const api = R.filter(x => enterprise.services.includes(x.call), services)
  const merge = R.merge(enterprise, {'api' : api})
  return merge
}, enterprises)

console.log('RAW>>>>>>>', apiInfoRaw)

const apiInfo = R.map(x => R.dissoc('services', x), apiInfoRaw)

console.log('INFO>>>>>> ', apiInfo[0])
