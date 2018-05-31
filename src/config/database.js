const mongoose = require('mongoose')

const keys = require('./keys')

mongoose.Promise = Promise

const mongodbUrl = keys.mongoUri
const connect = () => mongoose.connect(mongodbUrl)

module.exports = {
  connect
}
