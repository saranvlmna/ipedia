const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services");

module.exports = {

    login: async (req, res, next) => {
        try {
            const user = await authService.loginUser(req.body);
            return res.status(StatusCodes.OK).json({
                message: "user logged in successfully",
                data: user,
            })
        } catch (error) {
            next(error);
        }
    },

    signup: async (req, res, next) => {
        try {
            const user = await authService.signupUser(req.body);
            return res.status(StatusCodes.OK).json({
                message: "user signed up successfully",
                data: user,
            })
        } catch (error) {
            next(error);
        }
    },

    authFailed: (req, res, next) => {
        try {
            console.log("authFailed");
        } catch (error) {
            next(error)
        }
    },

    updateUser: (req, res, next) => {

    },

    listUsers: (req, res, next) => {

    }
}