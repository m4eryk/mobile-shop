const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: String,
  productDescription: String,
  productCategory: String,
  productPrice: String,
  productImage: String,
  productSeller: String,
  isBestProduct: Boolean,
  isTopProduct: Boolean,
  productRating: Number
});

module.exports = Product = mongoose.model('Product', ProductSchema);
