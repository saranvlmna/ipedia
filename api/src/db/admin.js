
const { Admin } = require("../models");
module.exports = {
    create: async (user) => {
        return await Admin.create(user);
    },

    findByEmail: async (email) => {
        return await Admin.findOne({ email });
    },

    findByMobile: async (number) => {
        return await Admin.findOne({ number })
    },
}