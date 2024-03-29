const router= require("express").Router();
const User = require("../models/User");
const bcrypt=  require ("bcrypt");

//Register
router.post("/register",async(req,res)=>{
    try{
    
   const salt= await bcrypt.genSalt(10);
   const hashPass=  await bcrypt.hash(req.body.password,salt);

   const newUser= await new User({
    username: req.body.username,
    email: req.body.email,
    password:hashPass,
   })
   const user= await newUser.save();
   res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});


//Login

// router.post("/login",async(req,res) =>{
//     try{
//     const user= await User.findOne({
//         username: req.body.username})
//         !user && res.status(400).json("Wrong Credentials...")

//         const validated =  await bcrypt.compare(req.body.password, user.password)
//         !validated && res.status(400).json("Wrong Credentials...")
        
//         const { password, ...others} = user._doc;
//         res.status(200).json(others);
//     }catch(err){
//         res.status(500).json(err);
//         console.log(err);
//     }
// })
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json("Wrong Credentials...");
      }
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        return res.status(400).json("Wrong Credentials...");
      }
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });
module.exports=router