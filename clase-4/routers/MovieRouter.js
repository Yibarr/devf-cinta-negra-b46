const express = require('express')

const router = express.Router()

router.get('/movies', (req, res) => {
  res.json({ message: 'MovieRouter' })
})

module.exports = router