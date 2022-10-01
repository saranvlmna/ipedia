const Cart = require("../models/cart");
const { ObjectId } = require("mongodb");

module.exports = {
  findOrCreate: async (userId, prdcId) => {
    const userCart = await Cart.findOne({ userId: userId });
    let pdrcObj = {
      item: ObjectId(prdcId),
      quantity: 1
    };
    if (userCart) {
      const productExist = userCart.products.findIndex(
        (products) => products.item.toString() == prdcId.toString()
      );
      if (productExist != -1) {
        await Cart.updateOne(
          {
            userId: ObjectId(userId),
            "products.item": ObjectId(prdcId)
          },
          {
            $inc: { "products.$.quantity": 1 }
          }
        );
      } else {
        await Cart.updateOne(
          { userId: ObjectId(userId) },
          {
            $push: { products: pdrcObj }
          }
        );
      }
    } else {
      let cartObj = {
        userId: ObjectId(userId),
        products: [pdrcObj]
      };
      await Cart.create(cartObj);
    }
  }
};
