const Profile = require("../model/profileCreateModel");

const profileCreateControler = async(req,res)=> {
  const {name,dob,gender,bloodGroup,phoneNumber,eplyedId,email} = req.body
  console.log(name,dob,gender,bloodGroup,phoneNumber,eplyedId,email);

  const existingUser = await Profile.findOne({email})

  if(existingUser){
    return res.status(400).json({
      success: false,
      message: "This email already used"
    })
  }
  
    let firstName = name.slice(0, 3);
  let randomNumber = Date.now().toString();
  let emid = firstName + randomNumber.slice(-3);
  console.log(emid);

  const profile = new Profile({
    name:name,
    email:email,
    gender:gender,
    bloodGroup:bloodGroup,
    dob:dob,
    emplyeId:emid
  })
  profile.save()
  res.send(profile)

}

const getProfile = async(req,res)=> {
  const data = await Profile.find({})
  res.status(200).json({
    success: true,
    message:"All profile",
    data:data
  })
}



// ✅ EXPORT
module.exports = { profileCreateControler,getProfile};