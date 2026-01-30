const jwt = require('jsonwebtoken');


let homeControlers = (req,res)=> {
  // res.json("hello world")

 let token = jwt.sign({data: 'nodejs'}, 'laisudhf', { expiresIn: '1h' });

 console.log(token)


}

module.exports = homeControlers