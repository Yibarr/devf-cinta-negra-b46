const mongoose = require('mongoose')

const DirectorSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    birth_date: {
      type: Date
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Director = mongoose.model('Director', DirectorSchema)

module.exports = Director