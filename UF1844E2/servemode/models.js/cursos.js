const mongoose = require('mongoose')

const UserSchema =new mongoose.Schema(
    {
        cod:{
            type: String,
            unique:true,
            required:true
        },
        name:{
            type: String},
       hours:{
            type: Number,
        },
        profesor:{
            type: String
        },
        estatus:{
            type: Boolean
        }
        
    }
)
module.exports = mongoose.model('user', UserSchema)