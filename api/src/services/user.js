const { User } = require("../db");

loginOrsignup = async (user) => {
    let existingUser;
    existingUser = await User.findByEmail(user.email)
    if (!existingUser) {
        return existingUser = await User.create(user)
    }
    else {
        return existingUser
    }
}


module.exports = {
    loginOrsignup
}