const mongoose = require("mongoose");

//Schema fro Products
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const productModel = mongoose.model("productModel", productSchema);
module.exports = productModel;
