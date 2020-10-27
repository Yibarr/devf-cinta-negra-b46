const express = require('express')
const app = express()
const PORT = 4000

const router = require('../routers/index.js')

app.use(express.json({ extended: true }))
//namespace
app.use('/api/v1', router)

module.exports = {
  app,
  PORT
}