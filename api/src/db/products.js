const { response } = require("express")
const { Prdcs } = require("../models")

module.exports = {

    create: (products) => {
        return new Promise(async (resolve) => {
            await Prdcs.create(products).then((prdct) => {
                resolve(prdct._id)
            })
        })
    },

    list: async (skip, limit) => {
        let query = {};
        return await Prdcs.find(query).skip(skip).limit(limit).lean()
    },

    delete: async (id) => {
        return new Promise(async (resolve) => {
            await Prdcs.deleteOne({ _id: id }).then((response) => {
                resolve(response)
            })
        })
    },

    edit: async (id, data) => {
        return new Promise(async (resolve) => {
            await Prdcs.updateOne({ _id: id }, {
                $set: {
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    category: data.category,
                }
            }).then((response) => {
                resolve(response)
            })
        })
    },

    findOne: async (id) => {
        return await Prdcs.findOne({ _id: id })

    }
}