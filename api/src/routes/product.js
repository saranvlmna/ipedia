const express = require("express");
const productController = require("../controllers/product");
const fileupload = require("../middlewares/fileupload");
const product = new express.Router();

product.get("/", productController.listProducts);
product.post("/add", fileupload, productController.addProduct);
product.put("/edit/:id", productController.editProduct);
product.delete("/delete/:id", productController.deleteProduct);
product.get("/findone/:id", productController.findById);

module.exports = product;
