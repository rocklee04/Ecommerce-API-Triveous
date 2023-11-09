let {redis} = require('../redis.db')
let JWT = require('jsonwebtoken')
require('dotenv').config()

let adminAuthenticate = async(req,res,next)=>{
    let adminPassword = req.query.adminPassword
    if(adminPassword == process.env.adminPassword){
             next()
    }else{

        res.send({msg:"only admin can access this route"})

    }
}

module.exports = {adminAuthenticate}