const express = require('express');

const userController = require('../controllers/userController');
const { validate } = require("../middlewares");
const { userSchema } = require('../schemas');
const router = new express.Router();

router.post('/login',userController.LoginAccount)

router.post('/signup', validate(userSchema), userController.CreateAccount);

router.get('/', userController.AllProducts)


module.exports = router;
