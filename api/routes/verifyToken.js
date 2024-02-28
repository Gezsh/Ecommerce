const jwt=require('jsonwebtoken')
const User=require('../models/user')

const verifyToken=async(req,res,next)=>{

    const authHeader = req.headers?.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
           res.status(404).json("No authorization")
    }
   
    const token=authHeader.split(' ')[1]

    const decoded= jwt.verify(token,process.env.JWT_SECRET)

    req.user={userId:decoded.userId,isAdmin:decoded.isAdmin}
  next()
}  

const verifyTokenAndAuthorization =async (req,res,next)=>{
        verifyToken(req,res,()=>{
            if(req.user.userId===req.params.id || req.user.isAdmin){
                 next();
            }else{
                res.status(403).json("You are not allowed to do that")
            }
        })
    }


const verifyTokenAndAdmin=async (req,res,next)=>{
        verifyToken(req,res,()=>{
            if(req.user.isAdmin){
                 next();
            }else{
                res.status(403).json("You are not allowed to do that")
            }
        })
    }

module.exports={verifyTokenAndAuthorization,verifyToken,verifyTokenAndAdmin}