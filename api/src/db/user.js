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
  },

  update: async (id, user) => {
    return await User.updateOne(
      {
        _id: id
      },
      user
    );
  },

  list: async () => {
    return await User.find();
  },

  inActive: async (id) => {
    return await User.updateOne(
      { _id: id },
      {
        $set: {
          isActive: false
        }
      }
    );
  }
};
