const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:Number,
    name:{
        type:String,
        required:true,
        trim:true,
        // maxlength:7
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:Number,
        required:true,
        maxlength:10
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    token:{
         type:String
    },
    task:{
        type:[]
    }
},{timestamps:true});

module.exports = mongoose. model('user', userSchema)