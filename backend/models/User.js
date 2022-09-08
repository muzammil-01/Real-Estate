const mongoose = require('mongoose')
const {Schema} = mongoose


const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    image:{
       type: Array,
    },
    date:{
        type:Date,
        default: Date.now
    }
})
const User =  mongoose.model('user', UserSchema)
module.exports =User