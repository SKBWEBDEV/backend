const mongoose = require('mongoose')
const {Schema} = mongoose

const profileCreateModel = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true,
    trim:true
  },
  emplyeId: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    // required: true
  },
  bloodGroup: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male","female","custom"],
    required: true
  },
  dob: {
    type: String,
    required: true
  },
})


module.exports = mongoose.model("Profile", profileCreateModel)