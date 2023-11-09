const express = require('express');
const router = express.Router();
const {productModel} = require('../Models/Product.Model');
const Cart = require('../Models/Cart.Model');
const Order = require('../Models/OrderPlaced.Model'); // Create a new model for orders

// ...existing routes...

// Place an order
let placedOrder = async (req, res) => {
  try {
    // Find the user's cart (assuming one cart per user for simplicity)
    const cart = await Cart.findOne().populate('items.product');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty. Add items to your cart first.' });
    }

    // Calculate the total order amount
    let totalAmount = 0;
    cart.items.forEach((item) => {
      totalAmount += item.product.price * item.quantity;
    });

    // Create the order
    const order = new Order({
      items: cart.items,
      totalAmount,
      userId: req.userId,
    });

    // Save the order to the database
    await order.save();

    // Clear the user's cart
    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error placing order', error: err.message });
  }
};

module.exports = { placedOrder };
