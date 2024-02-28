const mongoose =require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'name must be provided'],
        unique:true
    
    },
    email:{
        type:String,
        required:[true,'email must be provided'],
        unique:true,
        validate: {
            validator: function(email) {
              return /^[\w-]+(\.[\w-]+)*@gmail\.com$/.test(email);
            },
            message: 'Email must be a valid Gmail address with the @gmail.com domain.'
          }
    },
    password:{
        type:String,
        required:[true,'password must be provided'],
        unique:true,
        
    },
     isAdmin:{
            type:Boolean,
            default:false,
        }
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema)