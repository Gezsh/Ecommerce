const express =require('express')
const router=express.Router()

const {verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin}=require('./verifyToken')
const Cart=require('../models/cart')


const {
    createCart,
    deleteCart,
    getAllCart,
    getOneCart,
    updateCart
}=require('../controller/cart')

//CREATE

router.post('/',verifyToken,createCart)

router.post('/',verifyToken,async(req,res)=>{
    const newCart=new Cart(req.body)
    try{
          const savedCart=await newCart.save()
          res.status(200).json(savedCart)
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

router.put('/:id',verifyTokenAndAuthorization,updateCart)
 
//update
//  router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
     
 
//     try{
        
//         const updateCart=await Cart.findByIdAndUpdate(req.params.id,{
//             $set:req.body
//         },{new:true})
//          res.status(200).json(updateCart)
//     }catch(error){
        
//        res.status(500).json(error)
//     }

//  })

router.delete('/:id',verifyTokenAndAuthorization,deleteCart)

// // //delete
//   router.delete('/:id',verifyTokenAndAuthorization,async(req,res)=>{
     
//       try{
//            const removedCart=await Cart.findByIdAndDelete(req.params.id)
//            res.status(200).json(removedCart)
//       }catch(error){
//         res.status(500).json(error)
//       }
//   })

router.get('/find/:userId',)

// //   //get a cart
  router.get('/find/:userId',async(req,res)=>{
     
      try{
           const cart=await Cart.findById({userId:req.params.userId})
          
           res.status(200).json(cart)
      }catch(error){
        res.status(500).json(error)
      }
  })

//Get all Carts

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    try{
        const allCarts=await Cart.find()
        res.status(200).json(allCarts)
    }catch(err){
        res.status(500).json(err)
    }
     
})

module.exports=router