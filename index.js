const express = require('express')
const homeControlers = require('./controlers/homeControlers')
const check = require('./middleware/middleWare')

const app = express()

app.use('/home',check,homeControlers)

app.listen(5000,()=> {
  console.log("server running")
})
