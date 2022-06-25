const express = require('express');
const userController = require('../controllers/userController');
const router=new express.Router();

router.get('/login',userController.login)

router.post('/login',userController.LoginAccount)

router.get('/signup',userController.signup)

router.post('/signup',userController.CreateAccount)

router.get('/', userController.AllProducts)


module.exports = router;
