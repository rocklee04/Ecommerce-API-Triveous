const express = require('express');
const orderDetailsRouter = express.Router();
const {getOrderDetails} = require('../Controller/orderDetails.controller')


/**
 * @swagger
 * tags:
 *  name: Order Details
 *  description: All the API routes of the cart
 */ 

/**
 * @swagger
 * /orderDetails/order-details/{orderId}:
 *   get:
 *     summary: Get detailed information of a specific order by its ID
 *     tags: [Order Details]
 *     parameters:
 *       - name: orderId
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Order details retrieved successfully
 *       404:
 *         description: Order not found
 *       403:
 *         description: Unauthorized
 */


// Get order history for authenticated users
orderDetailsRouter.get('/order-details/:orderId', getOrderDetails)


module.exports = { orderDetailsRouter };