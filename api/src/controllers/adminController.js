const products = require("../models/products");
const { ProductsService } = require("../services");


module.exports = {

    addProductForm: (req, res) => {
        res.render('admin/add-products.hbs')
    },

    addProduct: async (req, res, next) => {
        try {
            await ProductsService.create(req.body, req.files.image)
            res.redirect('/admin')
        } catch (error) {
            next(error)
        }
    },

    editProductForm: async (req, res) => {
        try {
            const id = req.query.id
            const product = await ProductsService.FindProduct(id)
            var query = {
                name: product.name,
                price: product.price,
                description: product.description,
                caregory: product.category,
                id: product.id
            }
            res.render('admin/edit-products.hbs', { query })
        } catch (error) {
            console.log(error)
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
    }
}