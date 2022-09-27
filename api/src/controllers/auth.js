const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services");

module.exports = {
  signup: async (req, res, next) => {
    try {
      const user = await authService.signupUser(req.body);
      return res.status(StatusCodes.OK).json({
        message: "User signed up successfully",
        data: user
      });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const user = await authService.loginUser(req.body);
      return res.status(StatusCodes.OK).json({
        message: "User logged in successfully",
        data: user
      });
    } catch (error) {
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const user = await authService.updateUser(req.params.id, req.body);
      return res.status(StatusCodes.OK).json({
        message: "User updated successfully",
        data: user
      });
    } catch (error) {
      next(error);
    }
  },

  listUsers: async (req, res, next) => {
    try {
      const user = await authService.listUsers();
      return res.status(StatusCodes.OK).json({
        message: "User fetched successfully",
        data: user
      });
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const result = await authService.deleteUser(req.params.id);
      return res.status(StatusCodes.OK).json({
        message: "User deleted successfully",
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  authFailed: () => {
    try {
      console.log("authFailed");
    } catch (error) {
      next(error);
    }
  },

  me(req, res) {
    try {
      return res.status(StatusCodes.OK).json({
        message: "User fetched successfully",
        data: req.session
      });
    } catch (error) {}
  }
};
