const express = require('express')
const axios = require('axios')

const app = express()

const PORT = 4000

app.get('/', (request, response) => {
  response.json({
    message: 'Bienvenid@ al app'
  })
})

app.get('/perro', (request, response) => {
  response.json({
    message: 'Perrolandia'
  })
})


app.get('/pokemon/:id', (request, response) => {
  const { id } = request.params
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(pokeApiResponse => {
      response.json({
        pokemon: pokeApiResponse.data.name
      })
    })
    .catch( error => response.json({ error }))

})


app.get('/search', (request, response) => {
  const queries = request.query
  response.json({
    queries
  })
})

app.listen(PORT, () => {
  console.log(`Server initialized on PORT: http://localhost:${PORT}`)
})


