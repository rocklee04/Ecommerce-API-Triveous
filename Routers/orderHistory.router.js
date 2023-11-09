const express = require('express');
const orderHistoryRouter = express.Router();
const {getOrderHistory} = require('../Controller/orderHistory.controller')
const Order = require('../Models/OrderPlaced.Model');

/**
 * @swagger
 * tags:
 *  name: Order History
 *  description: All the API routes of the cart
 */ 
/**
 * @swagger
 * /orderHistory/order-history:
 *   get:
 *     summary: Get order history for authenticated users
 *     tags: [Order History]
 *     responses:
 *       200:
 *         description: Order history retrieved successfully
 *       403:
 *         description: Unauthorized
 */


// Get order history for authenticated users
orderHistoryRouter.get('/order-history', getOrderHistory)


module.exports = {orderHistoryRouter};
