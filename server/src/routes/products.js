const express = require("express");
const products = require("../data/products");
const router = express.Router();

router.get("/api/products", async (req, res) => {
  res.send({ test: "test" });
});

// module.exports = { productsRouter: router };
module.exports = router;
