const express = require('express');
const productRoutes = express.Router();
const { ProductModel } = require('../Models/Product.Model');
const Cart = require('../Models/Cart.Model');

// Add a product to the cart
let addToCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;
    

    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne(); // Assuming only one cart for simplicity

    if (!cart) {
      cart = new Cart({ items: [] });
    }

    const existingItem = cart.items.find((item) => item.product.toString() === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to cart', error: err.message });
  }
};

// View the cart
let viewCart = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('items.product');
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error viewing cart', error: err.message });
  }
};

// Update quantity of a product in the cart
let updateQuantity = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne(); // Assuming only one cart for simplicity

    const existingItem = cart.items.find((item) => item.product.toString() === productId);

    if (!existingItem) {
      return res.status(404).json({ message: 'Product not in cart' });
    }

    existingItem.quantity = quantity;
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error updating quantity', error: err.message });
  }
};

// Remove a product from the cart
let removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne(); // Assuming only one cart for simplicity

    cart.items = cart.items.filter((item) => item.product.toString() !== productId);
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error removing from cart', error: err.message });
  }
};

module.exports = { addToCart, viewCart, updateQuantity, removeFromCart};
