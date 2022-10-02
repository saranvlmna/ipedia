const express = require("express");
const cartController = require("../controllers/cart");
const cart = new express.Router();

cart.post("/add/:userId/:prdId", cartController.addToCart);
cart.get("/:userId", cartController.listCart);
cart.post("/delete/:userId/:prdId", cartController.removeProduct);
cart.post("/update/:userId/:prdId/:action", cartController.updateProduct);

module.exports = cart;
