const Cart=require('../models/cart')


const createCart=async(req,res)=>{

    const newCart=new Cart(req.body)
    try{
          const savedCart=await newCart.save()
          res.status(200).json(savedCart)
    }catch(error){
        res.status(500).json(error)
     }

}

const deleteCart=async(req,res)=>{

    try{
        const removedCart=await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json(removedCart)
   }catch(error){
     res.status(500).json(error)
   }

}

const getAllCart=async(req,res)=>{

    try{
        const allCarts=await Cart.find()
        res.status(200).json(allCarts)
    }catch(err){
        res.status(500).json(err)
    }

}

const getOneCart=async(req,res)=>{

    try{
        const cart=await Cart.findById({userId:req.params.userId})
       
        res.status(200).json(cart)
   }catch(error){
     res.status(500).json(error)
   }

}

const updateCart=async(req,res)=>{

    try{
        
        const updateCart=await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
         res.status(200).json(updateCart)
    }catch(error){
        
       res.status(500).json(error)
    }

}



module.exports={
    createCart,
    deleteCart,
    getAllCart,
    getOneCart,
    updateCart
}
