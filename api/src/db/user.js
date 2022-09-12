const User = require("../models/user");
module.exports = {
  create: async (user) => {
    return await User.create(user);
  },

  findByEmail: async (email) => {
    return await User.findOne({ email });
  },

  findByMobile: async (number) => {
    return await User.findOne({ number });
  }
};
