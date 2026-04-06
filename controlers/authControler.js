const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const registationControler = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    const exisitinguser = await User.findOne({ email: email});
    if (exisitinguser) {
      return res.status(400).json({
        success: false,
        message: "This Email already exisit",
      });
    }

    const hash = bcrypt.hashSync(password, 10);
    console.log(hash);
      

      const user = new User({
        name: name,
        email: email,
        password: hash,
      });
      user.save();
      res.send({
        id: user._id,
        name: user.name,
        password: user.password,
      });
    ;
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "server error ase",
    });
  }
};

const loginControler = async (req,res)=> {

  const {email,password} = req.body

  const exisitinguser = await User.findOne({email : email})

  if(exisitinguser.isLogin){
    return res.status(400).json({
      success : true,
      message: "Please log out from onather device"
    })
  }

  if(!exisitinguser){
    return res.status(404).json({
      success: false,
      message: "Eail not found"
    })
  }

let pass =  bcrypt.compareSync(password, exisitinguser.password);
console.log(pass);

if(pass){
  exisitinguser.isLogin = true
  exisitinguser.save()
   res.status(200).json({
    success: true,
    message: "Login successfull"
  })
}else{
  res.status(200).json({
    success: false,
    message: "Invalide Creadintail"
  })
}

  res.send(exisitinguser)
}

const logoutControler = async (req,res)=> {
  let {id} = req.body

  let exisitinguser = await User.findOne({_id : id})

  exisitinguser.isLogin = false
  exisitinguser.save()

  res.status(200).json({
    success: true,
      message: "log out done"
  })

}

module.exports = {registationControler,loginControler,logoutControler};
