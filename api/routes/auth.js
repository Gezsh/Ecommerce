const express =require('express')
const router=express.Router()
const User=require('../models/user')
const Cryptojs=require('crypto-js')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const bcrypt=require('bcryptjs')



//register
router.route('/register').post(async(req,res)=>{
    const {username,email,password}=req.body
    const newuser=new User({
        username:username,
        email:email,
        password:Cryptojs.AES.encrypt(password,process.env.PASS_SEC).toString()
    });

    try{
          const savedUser=await newuser.save();
          res.status(201).json(savedUser);
    }catch(error){
       res.status(500).json(error)
    }
   
})


//login

router.route('/login').post(async(req, res) => {
    try{
      //const {username,password}=req.body
      console.log(req.body)
      if(!req.body.username){
        res.status(401).json("wrong credentials")
      }
      const user=await  User.findOne({username:req.body.username})
    

      const token=jwt.sign({userId:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET,{expiresIn:"30d"})

      const hashedPassword=Cryptojs.AES.decrypt(user.password,process.env.PASS_SEC)
      const dbpassword=hashedPassword.toString(Cryptojs.enc.Utf8)

      if(dbpassword !== req.body.password){
        res.status(401).json("wrong credentials")
      }
         
      const {password,...others}=user._doc


      res.status(200).json({...others,token})
    }catch(err){
        
       res.status(500).json(err)
    }
  
})


module.exports=router