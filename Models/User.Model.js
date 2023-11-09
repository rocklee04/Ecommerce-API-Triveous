let mongoose = require('mongoose')


let userschema = mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:"User"}
},{
    versionKey:false
})

let UserModel = mongoose.model('user',userschema)

module.exports = {UserModel}