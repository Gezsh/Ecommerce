const User =require('../models/user')
const Cryptojs=require('crypto-js')


const updateUser=async(req,res)=>{

    if(req.body?.password){
        req.body.password = Cryptojs.AES.encrypt(password,process.env.PASS_SEC).toString()

    }

    try{
        
        const updateUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
         res.status(200).json(updateUser)
    }catch(error){
        
       res.status(500).json(error)
    }

}
const deleteUser=async(req,res)=>{

    try{
        const removed=await User.findByIdAndDelete(req.params.id)
        res.status(200).json(removed)
   }catch(error){
     res.status(500).json(error)
   }


}

const getAllUser=async(req,res)=>{

    const query=req.query.new;
   
    try{
          const users=query 
                ? await User.find().sort({_id: -1}).limit(1)
                : await User.find();
          // const users=await User.find()
         res.status(200).json(users)
    }catch(error){
      res.status(500).json(error)
    }

}

const getOneUser=async(req,res)=>{

    try{
        const user=await User.findById(req.params.id)
        const {password,...others}=user._doc
        res.status(200).json(others)
   }catch(error){
     res.status(500).json(error)
   }

}


const getUserState=async(req,res)=>{

    const date=new Date();
      const lastYear=new Date(date.setFullYear(date.getFullYear()-1))
      try{
          const data=await User.aggregate([
            {$match:{createdAt : {$gte : lastYear} }},
            {
              $project:{
                month:{$month:'$createdAt'},
              },
              $group:{
                _id:'$month',
                total:{$sum:1},
              }
            }

          ])
          res.status(200).json(data)

      }catch(err){
        res.status(500).json(err)
      }

}

module.exports={
    updateUser,
    deleteUser,
    getAllUser,
    getOneUser,
    getUserState
}