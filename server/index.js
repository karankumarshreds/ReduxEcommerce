const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
const productRouter = require("./src/data/products");
const products = require("./src/data/products");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connecting to database", err);
  }
};
connectMongo();
app.get("/api/products", (req, res) => {
  res.json(products);
});
// app.use(productRouter);
app.listen(5000, () => {
  console.log("Server listening on 3000");
});
