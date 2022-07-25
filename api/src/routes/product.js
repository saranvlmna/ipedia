const express = require('express');
const productController = require('../controllers/product');
const router = new express.Router();


router.post('/add-products', productController.addProduct)

router.post('/edit-product', productController.editProduct)

router.get('/delete-product/', productController.deleteProduct)

router.get('/', productController.getAllProducts)

router.get('/admin', productController.getAllProductDtls)

module.exports = router;
