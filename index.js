require('dotenv').config()
const express = require ('express')
const dbconected = require('./config/dbconected')
const registationControler = require('./controlers/authControler')
const app = express ()
app.use(express.json())

dbconected()

app.post('/registation', registationControler)

const port = process.env.PORT || 5000

app.listen(port, ()=> {
  console.log(`server running ${port}`);
  
})