const express = require('express');
const adminController = require('../controllers/adminController');
const router = new express.Router();

router.get('/add-products', adminController.addProductForm)

router.post('/add-products', adminController.addProduct)

router.get('/edit-product', adminController.editProductForm)

router.post('/edit-product', adminController.editProduct)

router.get('/delete-product/', adminController.deleteProduct)

router.get('/', adminController.getAllProducts)







module.exports = router;
