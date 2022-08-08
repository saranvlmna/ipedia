
const { User } = require("../models");
module.exports = {
    create: async (user) => {
        return await User.create(user);
    },

    findByEmail: async (email) => {
        return await User.findOne({ email });
    },
}
