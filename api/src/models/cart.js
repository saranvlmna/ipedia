const { Schema, model } = require("mongoose");

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  products: [],
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
