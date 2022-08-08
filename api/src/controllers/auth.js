const { StatusCodes } = require("http-status-codes");
const { adminService } = require("../services");

module.exports = {

    adminLogin: async (req, res, next) => {
        try {
            const admin = await adminService.loginAdmin(req.body);
            return res.status(StatusCodes.OK).json({
                message: "Admin logged in successfully",
                data: admin,
            })
        } catch (error) {
            next(error);
        }
    },

    adminSignup: async (req, res, next) => {
        try {
            const admin = await adminService.signupAdmin(req.body);
            return res.status(StatusCodes.OK).json({
                message: "Admin signed up successfully",
                data: admin,
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

}