const mongoose = require('mongoose')

const UserSchema =new mongoose.Schema(
    {
        cod:{
            type: String,
            unique:true,
            required:true
        },
        nombre:{
            type: String},
        apellidos:{
            type: String},
        edad:{
            type:Number
        },
        email:{
            type: String,
            unique:true,
            required:true
        },
        rol:{
            type: String
        },
        estatus:{
            type:Boolean
        }
        
    }
)
module.exports = mongoose.model('user', UserSchema)