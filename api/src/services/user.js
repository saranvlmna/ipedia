const { User } = require("../db");
const passwordService = require("./password");


module.exports = {
    signupUser: async (data) => {
        let existingUser;

        existingUser = await User.findByEmail(data.email)
        if (existingUser) {
            throw new Error("User Already exists with this Email id")
        }

        existingUser = await User.findByMobile(data.phone)
        if (existingUser) {
            throw new Error("User Already exists with this Mobile Number")
        }

        data.password = await passwordService.encrypt(data.password)
        return await User.create(data);
    },



    loginUser: async (auth) => {
        let existingUser;
        existingUser = await User.findByEmail(auth.email)
        if (!existingUser) {
            throw new Error('User Does not Exists');
        }
        let isValid;
        isValid = await passwordService.compare(auth.password, existingUser.password)
        if (!isValid) {
            throw new Error('Password is Invalid');
        }
        else if (isValid) {
            return existingUser
        }
    }
}

