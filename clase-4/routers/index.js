const express = require('express')
const MovieRouter = require('./MovieRouter.js')

const router = express.Router()

router.use(MovieRouter)

module.exports = router