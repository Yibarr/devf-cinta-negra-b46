const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const PORT = 4000

mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })
  .then( res => console.log(`MongoDB connected at db: ${res.connections[0].name}`))
  .catch(err => console.log(err))

const CartoonSchema = new mongoose.Schema({
  name: String,
  release_year: Number,
  img_url: {
    type: String,
    default: 'https://picsum.photos/200'
  },
  origin_country: String,
  author: String
})

const Cartoon = mongoose.model('Cartoons', CartoonSchema)

app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a mi api, prueba crear una caricatura en el endpoint /cartoon/create' })
})

//Create
app.post('/cartoon/create', async (req, res) => {
  const body = req.body
  const newCartoon = new Cartoon(body)
  const cartoonDoc = await newCartoon.save()
  res
    .status(201)
    .json({
      message: 'Se ha guardado una caricatura nueva en la DB',
      cartoon: cartoonDoc
    })

})
//Read
//Update
//Delete








app.listen(PORT, () => {
  console.log(`Server initialized on PORT: http://localhost:${PORT}`)
})  


