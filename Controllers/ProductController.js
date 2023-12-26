const productModel = require("../Models/ProductModel");

// API Save Product Model
module.exports.saveProduct = async (req, res) => {
  console.log(req.body);

  const data = await productModel(req.body)
  const dataSave = await data.save();
  res.send({message: "Upload successfully"})
};

// API get Product Model
module.exports.getProduct = async (req, res) => {
  const data = await productModel.find();
  res.send(JSON.stringify(data));
}