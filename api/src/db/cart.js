const Cart = require("../models/cart");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

module.exports = {
  findOrCreate: async (userId, prdcId) => {
    await Cart.findOne({ userId: userId }).then(async (res) => {
      if (res == null) {
        await Cart.create({
          userId: userId,
          products: {
            quantity: 1,
            $push: { prdcId }
          }
        });
      } else {
        await Cart.updateOne(
          { userId: userId },
          {
            $push: {
              products: {
                prdcId: prdcId,
                quantity: 1
              }
            }
          }
        );
      }
    });
  }
};
