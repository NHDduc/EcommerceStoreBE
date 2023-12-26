const mongoose = require("mongoose");

//schema object
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
})

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;