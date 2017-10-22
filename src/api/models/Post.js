const mongoose = require('mongoose')
const error = require('mongoose-mongodb-errors')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  text: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  created: {
    type: Date,
    default: Date.now
  }
})

postSchema.plugin(error);

module.exports = mongoose.model('Post', postSchema)
