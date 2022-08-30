const { product } = require("../models");

module.exports = {
  create: async (products) => {
    return await product.create(products);
  },

  list: async () => {
    return await product.find();
  },

  delete: async (id) => {
    return await product.deleteOne({ _id: id });
  },

  edit: async (id, data) => {
    return await product.updateOne({ _id: id }, data);
  },

  findOne: async (id) => {
    return await product.findOne({ _id: id });
  }
};
