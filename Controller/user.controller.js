 let {UserModel} = require('../Models/User.Model')
 let {redis} = require('../redis.db')
 let fs = require('fs')
 const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
 let bcrypt = require('bcrypt')
 let JWT = require('jsonwebtoken')
 
 
require('dotenv').config()



let logout = async (req, res) => {

    let { accessToken } = req.body
     JWT.verify(accessToken,process.env.privateKey, async(err,result)=>{
    if(err){

        res.status(404).send({ msg:err.message })

    }else{
    
    await redis.del(email, (err, result) => {

        if (err) {

            res.status(505).send({ msg: "something wrong to deleting of accesstoken in redis" })

        } else {

            res.send({ msg: "logout Success" })

        }
    })

}
    

    })
}


let login = async (req, res) => {

    let { email, password } = req.body

    let data = await UserModel.find({ email: email })
 
          if(data.length==0) return res.status(404).send({msg:"You didn't did signup"})

   let compare = await bcrypt.compare(password,data[0].password)
 

        if (!compare) {

            res.status(500).send({ msg: "wrong password" })

        } else {

            JWT.sign({ role: data[0].role }, process.env.privateKey, {expiresIn:"4h"}, async (err, token) => {

                if (err) {

                    res.status(500).send({ msg: "something is wrong to generating of accesstoken" })

                } else {

                    await redis.set(email, token,)

                    res.send({ accesstoken:token })

                }
            })


        }



}

let signup = async (req,res)=>{

    try {
        const {name, email, password, role} = req.body;

        const hashed = await bcrypt.hash(password, 10);

        const user = new UserModel({name, email, password: hashed});
        await user.save();

        res.status(201).json({message: 'User registered Successfully'});
    } catch (err) {
        res.status(500).json({message: 'An error occurred'});
    }

}

module.exports = { logout, login, signup }
