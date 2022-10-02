const { StatusCodes } = require("http-status-codes");
const { cartService } = require("../services");

module.exports = {
  addToCart: async (req, res, next) => {
    try {
      const cart = await cartService.addToCart(
        req.params.userId,
        req.params.prdId
      );
      return res.status(StatusCodes.OK).json({
        message: "Product add to cart successfully",
        data: cart
      });
    } catch (error) {
      next(error);
    }
  },

  listCart: async (req, res, next) => {
    try {
      const userCart = await cartService.getUserCart(req.params.userId);
      return res.status(StatusCodes.OK).json({
        message: "User cart fetched successfully",
        data: userCart
      });
    } catch (error) {
      next(error);
    }
  },

  removeProduct: async (req, res, next) => {
    try {
      const result = await cartService.deleteProduct(
        req.params.userId,
        req.params.prdId
      );
      return res.status(StatusCodes.OK).json({
        message: "Cart Product removed successfully",
        data: result
      });
    } catch (error) {
      next(error);
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const result = await cartService.updateProduct(
        req.params.userId,
        req.params.prdId,
        req.params.action
      );
      return res.status(StatusCodes.OK).json({
        message: "Cart updated successfully",
        data: result
      });
    } catch (error) {
      next(error);
    }
  },
  addToWishlist: (req, res, next) => {},
  removeWishlist: (req, res, next) => {},
  listWishlist: (req, res, next) => {}
};
