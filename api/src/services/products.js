const { products } = require("../db");

module.exports = {
  createProduct: async (products, img) => {
    return await products.create(products).then((res) => {
      let image = img;
      image.mv("./" + res._id + ".jpg");
    });
  },

  list: async () => {
    return await products.list();
  },

  FindProduct: async (id) => {
    return await products.findOne(id);
  },

  deleteProduct: async (id) => {
    await products.delete(id);
  },

  editProduct: async (id, data) => {
    return await products.edit(id, data);
  }
};
