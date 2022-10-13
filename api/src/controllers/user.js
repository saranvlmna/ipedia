const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services/");
module.exports = {
  getAll: async (req, res, next) => {
    try {
      const users = await authService.listUsers();
      return res.status(StatusCodes.OK).json({
        message: "User fetched successfully",
        data: users
      });
    } catch (error) {
      next(error);
    }
  }
};
