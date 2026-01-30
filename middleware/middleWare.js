const jwt = require('jsonwebtoken');

function check (req,res,next) {
  let token = req.headers.authorization

  jwt.verify(token,"laisudhf",function(err, decoded) {
    console.log(decoded);
    if (!err) {
      next()
    }
  })

  // if (token == 123456) {
  //   next()
  // }else{
  //   res.send("tumi k vai")
  // }

  

}

module.exports = check