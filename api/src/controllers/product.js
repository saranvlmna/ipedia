const products = require("../models/products");
const { ProductsService } = require("../services");


module.exports = {

    addProduct: async (req, res, next) => {
        try {
            await ProductsService.create(req.body, req.files.image)
            res.redirect('/admin')
        } catch (error) {
            next(error)
        }
    },

    editProduct: async (req, res) => {
        try {
            const id = req.query.id
            const data = req.body
            await ProductsService.editProduct(id, data)
            res.redirect('/admin')
        } catch (error) {
            console.log(error)
        }

    },

    deleteProduct: async (req, res) => {
        try {
            const id = req.query.id
            await ProductsService.deleteProduct(id)
            res.redirect('/admin')
        } catch (error) {
            console.log(error)
        }

    },

    getAllProducts: async (req, res, next) => {
        try {
            const limit = req.query.limit || 20;
            const page = req.query.page || 1;
            let products = await ProductsService.list(page, limit);
            res.render('admin/view-product.hbs', { admin: true, products })
        } catch (error) {
            next(error)
        }
    },

    getAllProductDtls: async (req, res, next) => {
        try {
            const limit = req.query.limit || 20;
            const page = req.query.page || 1;
            const products = await ProductsService.list(page, limit)
            return res.status(StatusCodes.OK).json({
                message: "Products fetched successfully",
                data: products,
            })
        } catch (error) {
            next(error)
        }

    }

}