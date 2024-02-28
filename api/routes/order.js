const express =require('express')
const router=express.Router()

const {verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin}=require('./verifyToken')
const Order=require('../models/order')


//CREATE

router.post('/',verifyToken,async(req,res)=>{
    const newOrder=new Order(req.body)
    try{
          const savedOrder=await newOrder.save()
          res.status(200).json(savedOrder)
    }catch(error){
        res.status(500).json(error)
     }
//   try{
//     const products=await Product.create({...req.body})
//     console.log(products)
//     res.status(200).json({products:products})
//   }catch(err){
//     res.status(500).json(err)
//   }

})


 
// //update
 router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
     
 
    try{
        
        const updateOrder=await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
         res.status(200).json(updateOrder)
    }catch(error){
        
       res.status(500).json(error)
    }

 })



// // // //delete
  router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
     
      try{
           const removedOrder=await Order.findByIdAndDelete(req.params.id)
           res.status(200).json(removedOrder)
      }catch(error){
        res.status(500).json(error)
      }
  })



// // //   //get a cart
  router.get('/find/:userId',async(req,res)=>{
     
      try{
           const order=await Order.findById({userId:req.params.userId})
          
           res.status(200).json(order)
      }catch(error){
        res.status(500).json(error)
      }
  })

// //Get all Carts

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    try{
        const allOrder=await Order.find()
        res.status(200).json(allOrder)
    }catch(err){
        res.status(500).json(err)
    }
     
})
  
// Get Monthly Income

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=router
