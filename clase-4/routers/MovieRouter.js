const { Movie } = require('../models/index.js')
const express = require('express')


const router = express.Router()


router.post('/movies', async (req, res) => {
  try {
    const { body } = req
    const newMovie = new Movie(body)
    const savedMovie = await newMovie.save()
    res.status(201).json({ message: 'Created movie on db', payload: savedMovie })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find().populate('directors')
    res.status(200).json({ message: "Ok", payload: movies })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
