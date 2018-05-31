const express = require('express')
const bodyParser = require('body-parser')

const database = require('./config/database')
const keys = require('./config/keys')


const app = express()

const configureExpress = () => {

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  return app
}

module.exports = () => 
  database
    .connect()
    .then(configureExpress)
