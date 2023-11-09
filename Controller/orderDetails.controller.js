const express = require('express');
const router = express.Router();
const Order = require('../Models/OrderPlaced.Model');

let getOrderDetails = async (req, res) => {
    try {
      const { orderId } = req.params;
  
      // Fetch the order by its ID and check if it's associated with the authenticated user
      const order = await Order.findOne({ _id: orderId, userId: req.userId });
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching order details', error: err.message });
    }
};

module.exports = { getOrderDetails };