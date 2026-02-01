const express = require ('express')

const app = express()

app.use(express.json())

app.post('/ragistation',(req,res)=> {
  let{username,email,password} = (req.body)
  console.log(username,email,password);

  let errors = []

  if(!username){
   errors.push({
    TypeError: "username",
    massage: "username requird",
   })
  }
  if(!email){
   errors.push({
    TypeError: "email",
    massage: "right email requird"
   })
  }
  if(!password){
   errors.push({
    TypeError: "password",
    massage: "right password requird"
   })
  }
  
  res.status(errors.length == 0 ? 201 : 404).send({
    success : errors.length == 0 ? true : false,
    massage : errors.length == 0 ? "ragistation done" : "ragistation fail",
    errors : errors.length == 0 ? null : errors
  })
})

app.listen(8000,()=> {
  console.log('server running');
  
})