const { StatusCodes } = require("http-status-codes");
const productsService = require("../services/products");
const path = require('path')
const filepath = path.join(__dirname, '../../public/')


module.exports = {

    addProduct: async (req, res, next) => {
        console.log(req.files)
        try {
            const product = await productsService.create(req.body);
            if (product) {
                req.files.image.mv(filepath + product.id + '.jpg')
            }
            return res.status(StatusCodes.CREATED).json({
                message: "Product created successfully",
                data: product,
            });
        } catch (error) {
            next(error)
        }
    },

    editProduct: async (req, res) => {
        try {
            const id = req.query.id
            const data = req.body
            const result = await productsService.editProduct(id, data)
            return res.status(StatusCodes.OK).json({
                message: "Product updated successfully",
                data: result,
            })
        } catch (error) {
            console.log(error)
        }

    },

    deleteProduct: async (req, res) => {
        try {
            const id = req.query.id
            const result = await productsService.deleteProduct(id)
            res.status(StatusCodes.OK).json({
                message: "Product deleted successfully",
                data: result,
            })
        } catch (error) {
            console.log(error)
        }

    },

    listProducts: async (req, res, next) => {
        try {
            const limit = req.query.limit || 20;
            const page = req.query.page || 1;
            const details = await productsService.list(page, limit)
            return res.status(StatusCodes.OK).json({
                message: "Products details fetched successfully",
                data: details,
            })
        } catch (error) {
            next(error)
        }

    },

    findById: async (req, res, next) => {

    }
}