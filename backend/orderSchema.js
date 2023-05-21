const mongoose = require('mongoose')
const orderSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Please add a name'],
      },
      email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
      }
    },
    {
      timestamps: true,
    }
  )
  
module.exports = mongoose.model('order', orderSchema)