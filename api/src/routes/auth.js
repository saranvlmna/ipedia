const express = require('express');

const authController = require('../controllers/auth');
const { validate } = require("../middlewares");
const { userSchema } = require('../schemas');
const router = new express.Router();

router.post('/login',authController.LoginAccount)

router.post('/signup', validate(userSchema), authController.CreateAccount);



module.exports = router;
