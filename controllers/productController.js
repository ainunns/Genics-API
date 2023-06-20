const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products found",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while getting products",
      error: error.message,
    });
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json({
      message: "Product saved",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while saving product",
      error: error.message,
    });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const productId = req.params._id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Product updated",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating product",
      error: error.message,
    });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params._id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.status(200).json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting product",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
