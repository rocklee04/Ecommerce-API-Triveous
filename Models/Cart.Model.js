const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
  quantity: Number,
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
});

module.exports = mongoose.model('Cart', cartSchema);
