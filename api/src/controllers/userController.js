const { StatusCodes } = require("http-status-codes");
const { Prdcs } = require("../models");
const { ProductsService } = require("../services");
const { User } = require("../models");
const { UserService } = require("../services");

module.exports = {

    signup: (req, res, next) => {
        res.render('users/signup.hbs')
    },

    CreateAccount: async (req, res, next) => {
        try {
            await UserService.create(req.body)
        } catch (error) {
            next(error)
        }
    },

    login: (req, res, next) => {
        res.render('users/login.hbs')
    },

    LoginAccount: async (req, res, next) => {
        try {
            var data = req.body
            var isloggedIn
            isloggedIn = await UserService.login(data);
            if (isloggedIn) {
                req.session.user = isloggedIn
                res.redirect('/')
            }

        } catch (error) {
            next(error)
        }
    },

    AllProducts: async (req, res, next) => {
        try {
            let user = req.session.user
            const limit = req.query.limit || 20;
            const page = req.query.page || 1;
            let products = await ProductsService.list(page, limit);
            res.render('users/view-product.hbs', { admin: false, products, user })
        } catch (error) {
            next(error)
        }

    }

}