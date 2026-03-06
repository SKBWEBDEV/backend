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

    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "server error",
        });
      }

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
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

module.exports = registationControler;
