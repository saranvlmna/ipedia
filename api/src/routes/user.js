const userController = require("../controllers/user");
const express = require("express");
const user = express.Router();

user.get("/", userController.getAll);
module.exports = user;
