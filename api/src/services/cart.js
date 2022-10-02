const { cart } = require("../db");
module.exports = {
  addToCart: async (userId, prdcId) => {
    return await cart.findOrCreate(userId, prdcId);
  },

  getUserCart: async (userId) => {
    return await cart.listUserCart(userId);
  },

  deleteProduct: async (userId, prdcId) => {
    return await cart.removeProduct(userId, prdcId);
  },

  updateProduct: async (userId, prdcId, action) => {
    return await cart.updateProduct(userId, prdcId, action);
  }
};
