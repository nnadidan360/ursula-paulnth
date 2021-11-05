const mongoose = require('mongoose'),
Schema = mongoose.Schema

const userschema = Schema({
    name:{
        type: String, 
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    conversation:[]
   
})






const User = new mongoose.model('User', userschema)
// const conversation = new mongoose.model('conversation', conversationschema)


// module.exports = conversation
module.exports = User