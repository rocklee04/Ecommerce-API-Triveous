const express = require("express")
const app = express()
const {UserRouter} = require("./Routers/user.router")
const userAuthentication = require('./Middleware/userAuthentication')
const {productRoutes} = require('./Routers/product.router')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const {connection} = require("./db")
const cors = require('cors')

require('dotenv').config()

app.use(express.json())

app.use(cors())

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Ecommerce API',
        version: '1.0.0',
      },
    },
    apis: ['./Routers/*.js'], // files containing annotations as above
  };

  const specification = swaggerJsdoc(options);

// swagger doc route for API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specification))


app.get("/",(req,res)=>{
    res.send({msg:"Welcome"})
})

// all the routes
app.use('/user',UserRouter)
app.use('/product', productRoutes)


app.listen(process.env.port, async()=>{

    try{

   connection
   console.log('Connected To DB')

    }catch(err){
        console.log(err)
    }

    console.log(`server is running at port ${process.env.port}`)

})
