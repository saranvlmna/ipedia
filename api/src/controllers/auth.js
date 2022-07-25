const { StatusCodes } = require("http-status-codes");;
const { authService } = require("../services");

module.exports = {

    createAccount: async (req, res, next) => {
        try {
            const result = await authService.create(req.body)
            return res.status(StatusCodes.CREATED).json({
                message: "User created successfully",
                data: result,
            })
        } catch (error) {
            next(error)
        }
    },

    loginAccount: async (req, res, next) => {
        try {
            const user = await authService.login(req.body);
            return res.status(StatusCodes.OK).json({
                message: "User logged in successfully",
                data: user,
            })

        } catch (error) {
            next(error)
        }
    },

}