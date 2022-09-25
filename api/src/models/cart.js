const { Schema, model } = require("mongoose");

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  products: [
    {
      quantity: 0,
      product: {
        type: Schema.Types.ObjectId,
        ref: "product"
      }
    }
  ],
  price: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model("cart", schema);
