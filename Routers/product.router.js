const express = require("express");
const {adminAuthenticate} = require('../Middleware/authentication')
const productRoutes = express.Router();
const productController  = require("../Controller/product.controller");

/**
 *@swagger
 * components:
 *   schemas:
 *      Product:
 *        type: object
 *        required:
 *          - title
 *          - gender
 *          - category
 *          - brand
 *          - material
 *          - rating
 *          - review
 *          - price
 *          - image
 *        properties:
 *          title:
 *             type: string
 *             description: The title of the product 
 *          gender:
 *             type: string
 *             description: The gender for which the product is.  
 *          category:
 *             type: string
 *             description: The category of the product 
 *          brand:
 *             type: string
 *             description: The brand of the product 
 *          material:
 *             type: string
 *             description: The material of the product 
 *          rating:
 *             type: string
 *             description: The rating of the product 
 *          review:
 *             type: string
 *             description: The reveiw of the product 
 *          price:
 *             type: string
 *             description: The price of the product
 *          image:
 *             type: string
 *             description: The image of the product  
 */

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: All the API routes of the product
 */

/**
 * @swagger
 * /product/:
 *  get:
 *       summary: To get all the Products
 *       tags: [Products]
 *       responses:
 *           201:
 *               description: Products.
 *           500:
 *               description: An error message.      
 */

/**
 * @swagger
 * /product/:id:
 *  get:
 *       summary: To get product by its id.
 *       tags: [Products]
 *       responses:
 *           201:
 *               description: Product.
 *           500:
 *               description: Product not found.      
 */

/**
 * @swagger
 * /product/add:
 *  post:
 *       summary: To add the details of new product.
 *       tags: [Products]
 *       responses:
 *           200:
 *               description: One product has been added.
 *           401:
 *               description: An error message.      
 */



/**
 * @swagger
 * /product/update/:id:
 *  put:
 *       summary: To get product by its id.
 *       tags: [Products]
 *       responses:
 *           200:
 *               description: Product details updated successfully.
 *           400:
 *               description: An error occured.      
 */

/**
 * @swagger
 * /product/delete/:id:
 *  delete:
 *       summary: To delete product by its id.
 *       tags: [Products]
 *       responses:
 *           200:
 *               description: Product details deleted successfully.
 *           400:
 *               description: An error occured.      
 */

productRoutes.get("/admin", productController.adminAll)



productRoutes.get("/", productController.getAllProducts)
productRoutes.get("/:id", productController.getProductById)
productRoutes.post("/add", adminAuthenticate, productController.addProduct)
productRoutes.put("/update/:id", adminAuthenticate, productController.updateProduct)
productRoutes.delete('/delete/:id', adminAuthenticate, productController.deleteProduct)


module.exports = {productRoutes};