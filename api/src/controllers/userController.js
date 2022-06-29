const { StatusCodes } = require("http-status-codes");
const { ProductsService } = require("../services");
const { UserService } = require("../services");

module.exports = {

    CreateAccount: async (req, res, next) => {
        try {
           const result= await UserService.create(req.body)
            return res.status(StatusCodes.OK).json({
                message: "User created successfully",
                data: result,
                meta:{}
            })
        } catch (error) {
            next(error)
        }
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