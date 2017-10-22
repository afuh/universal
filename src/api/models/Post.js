const mongoose = require('mongoose')
const error = require('mongoose-mongodb-errors')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  text: {
    type: String,
    required: true,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

postSchema.plugin(error);

module.exports = mongoose.model('Post', postSchema)
