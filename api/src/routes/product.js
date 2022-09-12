const express = require("express");
const productController = require("../controllers/product");
const fileupload = require("../middlewares/fileupload");
const router = new express.Router();

router.get("/", productController.listProducts);
router.post("/add", fileupload, productController.addProduct);
router.put("/edit/:id", productController.editProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.get("/findone/:id", productController.findById);

module.exports = router;
