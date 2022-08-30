const express = require("express");
const productController = require("../controllers/product");
const router = new express.Router();

// router.get('/', productController.listProducts)
router.post("/add", productController.addProduct);
router.put("/edit/:id", productController.editProduct);
// router.get('/delete/:id', productController.deleteProduct)
// router.get('/findone/:id', productController.findById)

module.exports = router;
