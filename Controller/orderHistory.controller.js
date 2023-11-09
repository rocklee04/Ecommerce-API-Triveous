const express = require('express');
const router = express.Router();
const Order = require('../Models/OrderPlaced.Model');

// Get order history for authenticated users
let getOrderHistory = async (req, res) => {
  try {
    // Fetch orders associated with the authenticated user
    const orders = await Order.find({ userId: req.userId }); // Filter orders by user ID

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching order history', error: err.message });
  }
};

module.exports = {getOrderHistory};
