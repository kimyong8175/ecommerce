import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8080;
import products from "./data/products.js";
import connectDB from "./config/db.js";

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
