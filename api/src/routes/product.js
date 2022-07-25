const express = require('express');
const productController = require('../controllers/product');
const router = new express.Router();

router.get('/', productController.getAllProducts)

router.get('/admin', productController.getAllProductDtls)

router.post('/add-products', productController.addProduct)

router.post('/edit-product', productController.editProduct)

router.get('/delete-product/', productController.deleteProduct)



module.exports = router;
