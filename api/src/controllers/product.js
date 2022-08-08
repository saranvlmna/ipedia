const { StatusCodes } = require("http-status-codes");
const  productsService  = require("../services/products");
const multer = require("multer");
const fileUpload = require("../middlewares/fileupload");
const upload = multer({ fileUpload })


module.exports = {

    addProduct: async (req, res, next) => {
        try {
            upload.single("image")(req, res, () => {
                const img = req.file;
                console.log(img);
            });
            // const data = req.body;
            // const img = req.files.image;
            // const product = await productsService.create(data, img);
            // return res.status(StatusCodes.CREATED).json({
            //     message: "Product created successfully",
            //     data: product,
            // });
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

    getAllProducts: async (req, res, next) => {
        try {
            const limit = req.query.limit || 20;
            const page = req.query.page || 1;
            let products = await productsService.list(page, limit);
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
            const details = await productsService.list(page, limit)
            return res.status(StatusCodes.OK).json({
                message: "Products details fetched successfully",
                data: details,
            })
        } catch (error) {
            next(error)
        }

    },

}