const express = require('express');
const cartRouter = express.Router();
const cartController = require("../Controller/cart.controller")

/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *           description: Array of items in the cart
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: The ID of the product in the cart
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product in the cart
 */

/**
 * @swagger
 * tags:
 *  name: Cart
 *  description: All the API routes of the cart
 */ 

/**
 * @swagger
 * /cart/add-to-cart/{productId}:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     parameters:
 *       - name: productId
 *         in: path
 *         type: string
 *         required: true
 *       - name: quantity
 *         in: body
 *         type: integer
 *         required: true
 *         schema:
 *           type: object
 *     responses:
 *       200:
 *         description: Product added to the cart successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /cart/view-cart:
 *   get:
 *     summary: View the cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Cart details retrieved successfully
 *       404:
 *         description: Cart is empty
 */

/**
 * @swagger
 * /cart/update-quantity/{productId}:
 *   put:
 *     summary: Update quantity of a product in the cart
 *     tags: [Cart]
 *     parameters:
 *       - name: productId
 *         in: path
 *         type: string
 *         required: true
 *       - name: quantity
 *         in: body
 *         type: integer
 *         required: true
 *         schema:
 *           type: object
 *     responses:
 *       200:
 *         description: Product quantity updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not in cart
 */

/**
 * @swagger
 * /cart/remove-from-cart/{productId}:
 *   delete:
 *     summary: Remove a product from the cart
 *     tags: [Cart]
 *     parameters:
 *       - name: productId
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Product removed from the cart successfully
 *       404:
 *         description: Product not in cart
 */




// Add a product to the cart
cartRouter.post('/add-to-cart/:productId', cartController.addToCart) 
cartRouter.get('/view-cart', cartController.viewCart)
cartRouter.put('/update-quantity/:productId', cartController.updateQuantity)
cartRouter.delete('/remove-from-cart/:productId', cartController.removeFromCart)

module.exports = {cartRouter};
