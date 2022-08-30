const { Schema, model } = require("mongoose");

const schema = new Schema({
  product: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date
  }
});

module.exports = model("wishlist", schema);
