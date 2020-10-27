require('dotenv').config()
require('./utils/mongoClient.js')
const { app, PORT } = require('./api/index.js')

app.listen(PORT, err => {
  err
    ? console.log('Error on init')
    : console.log(`Server initialized on: ${PORT}`)
})