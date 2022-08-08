const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services");

module.exports = {

    authFailed: (req, res, next) => {
        try {
            console.log("authFailed");
        } catch (error) {
            next(error)
        }
    },

}