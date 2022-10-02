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
  },

  listUserCart: async (userId) => {
    return await Cart.aggregate([
      {
        $match: { userId: ObjectId(userId) }
      },
      {
        $unwind: "$products"
      },
      {
        $project: {
          item: "$products.item",
          quantity: "$products.quantity"
        }
      },
      {
        $lookup: {
          from: "products",
          localField: "item",
          foreignField: "_id",
          as: "product"
        }
      },
      {
        $project: {
          item: 1,
          quantity: 1,
          product: { $arrayElemAt: ["$product", 0] }
        }
      },
      {
        $group: {
          _id: userId,
          total: { $sum: { $multiply: ["$quantity", "$product.price"] } },
          products: { $push: "$$ROOT" }
        }
      }
    ]);
  },

  removeProduct: async (userId, prdcId) => {
    return await Cart.updateOne(
      { userId: ObjectId(userId) },
      { $pull: { products: { item: ObjectId(prdcId) } } }
    );
  },

  updateProduct: async (userId, prdcId, action) => {
    action = parseInt(action);
    return await Cart.updateOne(
      {
        userId: ObjectId(userId),
        "products.item": ObjectId(prdcId)
      },
      {
        $inc: { "products.$.quantity": action }
      }
    );
  }
};
