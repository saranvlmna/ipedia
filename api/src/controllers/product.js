const { StatusCodes } = require("http-status-codes");
const { ProductsService } = require("../services");


module.exports = {

    addProduct: async (req, res, next) => {
        try {
            const data = req.body;
            const img = req.files.image;
            const product = await ProductsService.create(data, img);
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
            const result = await ProductsService.editProduct(id, data)
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
            const result =await ProductsService.deleteProduct(id)
            res.status(StatusCodes.OK).json({
                message: "Product deleted successfully",
                data: result,
            })
        } catch (error) {
            console.log(error)
        }

    },

    getAllProducts: async (req, res, next) => {
        try {
            const limit = req.query.limit || 20;
            const page = req.query.page || 1;
            let products = await ProductsService.list(page, limit);
            res.status(StatusCodes.OK).json({
                message: "Products fetched successfully",
                data: products,
            })
        } catch (error) {
            next(error)
        }
    },

    getAllProductDtls: async (req, res, next) => {
        try {
            const limit = req.query.limit || 20;
            const page = req.query.page || 1;
            const details = await ProductsService.list(page, limit)
            return res.status(StatusCodes.OK).json({
                message: "Products details fetched successfully",
                data: details,
            })
        } catch (error) {
            next(error)
        }

    }

}