require('dotenv').config()
const express = require ('express')
const dbconected = require('./config/dbconected')
const {registationControler, loginControler, logoutControler} = require('./controlers/authControler')
const {profileCreateControler, getProfile,  } = require('./controlers/profileCreateControler')
const app = express ()
app.use(express.json())

dbconected()

app.post('/registation', registationControler)
app.post('/login', loginControler)
app.post('/logout', logoutControler)
// ====================create profile========================
app.post('/profile', profileCreateControler)
app.get('/getprofile', getProfile)

const port = process.env.PORT || 5000

app.listen(port, ()=> {
  console.log(`server running ${port}`);
  
})