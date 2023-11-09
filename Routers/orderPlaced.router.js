const express = require('express');
const orderPlacedRouter = express.Router();
const {placedOrder} = require('../Controller/orderPlaced.controller');
const {productModel} = require('../Models/Product.Model');
const Cart = require('../Models/Cart.Model');
const Order = require('../Models/OrderPlaced.Model'); // Create a new model for orders

/**
 * @swagger
 * components:
 *   schemas:
 *     PlaceOrderRequest:
 *       type: object
 *       required:
 *         - items
 *       properties:
 *         items:
 *           type: array
 *           description: An array of items to be included in the order
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: The ID of the product to include in the order
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product to include in the order
 */


/**
 * @swagger
 * tags:
 *  name: Order Placed
 *  description: All the API routes of the order Placed
 */ 

/**
 * @swagger
 * /orderPlaced/place-order:
 *   post:
 *     summary: Place an order with products from the cart
 *     tags: [Order Placed]
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Cart is empty
 */

// Place an order
orderPlacedRouter.post('/place-order', placedOrder)


module.exports = {orderPlacedRouter};
