const { Director } = require('../models/index.js')
const express = require('express')

const router = express.Router()

router.post('/directors', async (req, res) => {
  try {
    const { body } = req
    const newDirector = new Director(body)
    const savedDirector = await newDirector.save()
    res.status(201).json({ message: 'Director created on db', payload: savedDirector })

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message })
  }
})

router.get('/directors', (req, res) => {
  
})

module.exports = router