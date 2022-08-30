const { StatusCodes } = require("http-status-codes");
const productsService = require("../services/products");
const path = require("path");
const filepath = path.join(__dirname, "../../public/");

module.exports = {
  addProduct: async (req, res, next) => {
    try {
      const product = await productsService.createProduct(req.body);
      return res.status(StatusCodes.CREATED).json({
        message: "Product created successfully",
        data: product
      });
    } catch (error) {
      next(error);
    }
  },

  editProduct: async (req, res, next) => {
    try {
      const result = await productsService.editProduct(req.params.id, req.body);
      console.log(result);
      return res.status(StatusCodes.OK).json({
        message: "Product updated successfully",
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      const result = await productsService.deleteProduct(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Product deleted successfully",
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  listProducts: async (req, res, next) => {
    try {
      const details = await productsService.listProduct();
      return res.status(StatusCodes.OK).json({
        message: "Products details fetched successfully",
        data: details
      });
    } catch (error) {
      next(error);
    }
  },

  findById: async (req, res, next) => {
    try {
      const product = await productsService.findProduct(req.params.id);
      return res.status(StatusCodes.OK).json({
        message: "Product fetched successfully",
        data: product
      });
    } catch (error) {
      next(error);
    }
  }
};
