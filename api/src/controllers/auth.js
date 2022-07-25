const { StatusCodes } = require("http-status-codes");
const { ProductsService } = require("../services");
const { UserService } = require("../services");

module.exports = {

    CreateAccount: async (req, res, next) => {
        try {
            const result = await UserService.create(req.body)
            return res.status(StatusCodes.CREATED).json({
                message: "User created successfully",
                data: result,
            })
        } catch (error) {
            next(error)
        }
    },

    LoginAccount: async (req, res, next) => {
        try {
            const user = await UserService.login(req.body);
            return res.status(StatusCodes.OK).json({
                message: "User logged in successfully",
                data: user,
            })

        } catch (error) {
            next(error)
        }
    },



}