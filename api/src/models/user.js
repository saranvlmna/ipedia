const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  number: {
    type: Number
  },
  address: {
    type: String
  },
  password: {
    type: String
  },
  picture: {
    type: String
  },
  accessToken: {
    type: String
  },
  refreshToken: {
    type: String
  },
  isGLogin: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  orders: {
    type: Array
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

module.exports = model("user", schema);
