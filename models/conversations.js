const mongoose = require('mongoose'),
Schema = mongoose.Schema
const User = require('./Users')

const sentMessage = new Schema({
    conversation: String,
    timestamp: trrue,
    by:  { type: Schema.Types.ObjectId, ref: 'User' } 
})