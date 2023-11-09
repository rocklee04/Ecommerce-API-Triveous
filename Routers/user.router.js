let express = require("express")
// let passport = require("../Routers/Google-ouath")
let {logout,login,signup} = require("../Controller/user.controller")
let {UserModel} = require('../Models/User.Model')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
let JWT = require('jsonwebtoken')
const { redis } = require("../redis.db")
let UserRouter = express.Router()

require('dotenv').config()

/**
 *@swagger
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          name:
 *             type: string
 *             description: The name of the user 
 *          email:
 *             type: string
 *             description: The email of the user 
 *          password:
 *             type: string
 *             description: The password of the user 
 *          role:
 *             type: string
 *             description: The role of the user 
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: All the API routes of the user
 */ 


/**
 * @swagger
 * /user/signup:
 *  post:
 *       summary: To post the details of new user
 *       tags: [Users]
 *       responses:
 *           201:
 *               description: User has been successfully registered.
 *           500:
 *               description: An error occured while registering.      
 */


/**
 * @swagger
 * /user/login:
 *  post:
 *       summary: To post the details of existing user
 *       tags: [Users]
 *       responses:
 *           200:
 *               description: User has been logged in.
 *           500:
 *               description: An error occured.      
 */


// UserRouter.use(passport.initialize());
//UserRouter.use(passport.session());

// ////////////////////login////////////////////////////////////////////
// UserRouter.get('/auth/google',
//     passport.authenticate('google', {
//         scope:
//             ['email', 'profile']
//     }
//     ));

// UserRouter.get('/auth/google/callback',

//     passport.authenticate('google', { failureRedirect: '/user/auth/google/failure', session: false }),

    
//       async (req,res)=>{
    
//             let data = await UserModel.find({email:`${req.user.email}`})
//           // console.log(await UserModel.find({email:req.user.email}))
//           if(data.length>0){

//             let token = JWT.sign({role:data[0].role},process.env.privateKey)
//             await redis.set(req.user.email,token)

//             res.send({msg:"login Success"})

//           }else{
             
//             res.status(404).send({msg:"login failed"})

//           }

//         }
             
// );

//////////////////////////////////////////////////////////login/////////////////////////////

UserRouter.post('/signup',signup)
UserRouter.delete("/logout",logout)
UserRouter.post('/login',login)




module.exports = { UserRouter }