const express = require('express')
const app = express()
const PORT = 4000

const router = require('../routers/index.js')

//namespace
app.use('/api/v1', router)

module.exports = {
  app,
  PORT
}