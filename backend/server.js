import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8080;
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
