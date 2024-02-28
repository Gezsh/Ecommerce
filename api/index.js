const express =require('express')
const app=express();
require('dotenv').config()
const mongoose=require('mongoose')
const  userRoute=require('./routes/user')
const  authRoute=require('./routes/auth')
const  productRoute=require('./routes/product')
const  cartRoute=require('./routes/cart')
const  orderRoute=require('./routes/order')
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)


mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log("Database is connected"))
        .catch((err)=>console.log(err))

app.listen(process.env.PORT || 3000, ()=>{

    console.log("Backend server is running")
})
