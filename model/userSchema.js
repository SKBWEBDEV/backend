const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema ({
  name : {
    type: String,
    required: [true, "username is requird"]
  }, 
  email: {
    type : String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true,'email is required']
  }, 
  password : {
    type: String,
    min: [5, 'to low'],
    max: [10, 'to high'],
    required: [true, "password is required"]
  },
  photo: {
    type: String
  }, 
  nid: {
    type: String,
    min: [5, 'to low'],
    max: [10, 'to high'],
  },
   address: {
    type : String
  }
})

module.exports = mongoose.model ('User',userSchema)