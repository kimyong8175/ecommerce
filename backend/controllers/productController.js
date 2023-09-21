import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc   Fetch all products
// @route  GET /api/products
// @acces  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc   Fetch Single product
// @route  GET /api/products/:id
// @acces  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});