const express =require('express')
const router=express.Router()

const {verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin}=require('./verifyToken')
const Product=require('../models/product')


//CREATE

router.post('/',verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new Product(req.body)
    try{
          const savedProduct=await newProduct.save()
          res.status(200).json(savedProduct)
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
        
        const updateProduct=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
         res.status(200).json(updateProduct)
    }catch(error){
        
       res.status(500).json(error)
    }

 })

// //delete
  router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
     
      try{
           const removedProduct=await Product.findByIdAndDelete(req.params.id)
           res.status(200).json(removedProduct)
      }catch(error){
        res.status(500).json(error)
      }
  })


//   //get product
  router.get('/find/:id',async(req,res)=>{
     
      try{
           const product=await Product.findById(req.params.id)
          
           res.status(200).json(product)
      }catch(error){
        res.status(500).json(error)
      }
  })


//   //get full products
  router.get('/',async(req,res)=>{
     const qNew=req.query.new;
     const qCategory=req.query.category;
     
      try{
            let products;
            if(qNew){
                products=await Product.find().sort({createdAt:-1}).limit(5)

            }else if(qCategory){
                products=await Product.find({categories:{
                    $in:[qCategory],
                },
            });
            }else{
                products=await Product.find()
            }
           res.status(200).json(products)
      }catch(error){
        res.status(500).json(error)
      }
  })

module.exports=router