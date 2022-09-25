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

  removeProduct: (req, res, next) => {},
  updateProduct: (req, res, next) => {},
  listCart: (req, res, next) => {},
  addToWishlist: (req, res, next) => {},
  removeWishlist: (req, res, next) => {},
  listWishlist: (req, res, next) => {}
};
