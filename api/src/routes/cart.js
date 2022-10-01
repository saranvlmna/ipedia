const express = require("express");
const cartController = require("../controllers/cart");
const cart = new express.Router();

cart.post("/add/:userId/:prdId", cartController.addToCart);
cart.get("/:userId", cartController.listCart);

module.exports = cart;
