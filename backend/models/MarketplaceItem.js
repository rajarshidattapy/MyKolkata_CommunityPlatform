const mongoose = require('mongoose');

const marketplaceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  price: String,
  image: String,
  link: String
}, { timestamps: true });

module.exports = mongoose.model('MarketplaceItem', marketplaceItemSchema); 