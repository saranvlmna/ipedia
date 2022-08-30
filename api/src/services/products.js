const { products } = require("../db");
const path = require("path");
const filepath = path.join(__dirname, "../../public/");

module.exports = {
  createProduct: async (data, img) => {
    return await products.create(data).then((res) => {
      // let image = img;
      // image.mv(filepath + res._id + ".jpg");
    });
  },

  listProduct: async () => {
    return await products.list();
  },

  editProduct: async (id, data) => {
    return await products.edit(id, data);
  },

  deleteProduct: async (id) => {
    await products.delete(id);
  },

  findProduct: async (id) => {
    return await products.findOne(id);
  }
};
