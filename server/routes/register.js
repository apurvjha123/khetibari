const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Register = require("../models/Register");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");


// getting all data
router.get("/", async (req, res) => {
  try {
    const register = await Register.find();
    if (!register) {
     return res.status(404).json({ message: "register not found" });
    }
    return res.status(200).json({ register });
  } catch (error) {
    console.log(error);
  }
});

//posting signup data

router.post(
  "/signup",
  body("email", "enter valid email").isEmail(),
  body("email", "email should exist").exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { username, email } = req.body;
      secHash = await bcrypt.hash(req.body.password, 10);
      console.log(secHash)

      const user = await Register.findOne({ email });

      if (user) {
        return res.status(404).json({ error: "User already Exist" });
      }

      const register = new Register({
        username,
        email,
        password: secHash,
      });

      const accessToken = jwt.sign(
        { _id: Register._id },
        "process.env.ACCESS_TOKEN"
      );

      if (!register) {
      return res.status(404).json({ message: "user not created" });
      }

      await register.save();
      return res.status(200).json({ accessToken });
    } catch (error) {
      console.log(error);
    }
  }
);

// Creating Login 

router.post(
  "/login",
  body("email", "email should exist").exists(),
  body("password", "password should exist").exists(),
  async (req, res) => {
    const {email , password} = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await Register.findOne({email : email})
      if(!user){
        return res.status(404).json({error :"Please Enter correct credential"})
      }
      const valid = await bcrypt.compare(password,user.password)
        if(!valid){
        return res.status(404).json({error :"Please Enter correct credential"})
      }
      const accessToken = jwt.sign(
          { _id: user._id },
          "process.env.ACCESS_TOKEN"
      );
      return res.status(200).json({_id :user._id, email: user.email ,accessToken });

    } catch (error) {
      console.log({error})
    }
  }
);

// fetching user detail after loging

router.get('/getuser', (req,res)=>{
  res.send('Hello World')
})



module.exports = router;
