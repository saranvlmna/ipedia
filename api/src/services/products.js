const { Prdcs } = require("../db")
const { BadRequestError } = require("../errors")

async function create(products, img) {
    try {
        products = await Prdcs.create(products);
        let image = img
        image.mv('./' + products + '.jpg', (err) => {
            if (err) {
                console.log(err)
            }
        })
        return
    } catch (error) {
        console.log(error)
    }

}

async function list(page, limit) {
    const skip = (page - 1) * limit;
    return await Prdcs.list(skip, limit);
}

async function FindProduct(id) {
    return await Prdcs.findOne(id)
}

async function deleteProduct(id) {
    await Prdcs.delete(id)
}

async function editProduct(id, data) {
    var abc = await Prdcs.edit(id, data)
}

module.exports = {
    create,
    list,
    deleteProduct,
    editProduct,
    FindProduct
}