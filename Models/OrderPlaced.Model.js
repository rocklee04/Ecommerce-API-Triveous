const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
  quantity: Number,
});

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  totalAmount: Number,
  // You can add more fields to your order schema as needed.
});

module.exports = mongoose.model('Order', orderSchema);
