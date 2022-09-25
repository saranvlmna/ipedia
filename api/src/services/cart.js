const { cart } = require("../db");
module.exports = {
  addToCart: async (userId, prdcId) => {
    return await cart.findOrCreate(userId, prdcId);
  }
};
