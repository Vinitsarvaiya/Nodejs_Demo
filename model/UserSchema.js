const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    dob:Date,
    month:Date,
    time:String,
    datetime:Date,
    checkbox:Boolean,
    radio:String,
    range:Number,
    week:String,
    color:String,
    file:String
})

const UserModel = mongoose.model('User',UserSchema)

module.exports = UserModel