const express = require("express");
const cartController = require("../controllers/cart");
const cart = new express.Router();

cart.post("/add/:userId/:prdId", cartController.addToCart);

module.exports = cart;
