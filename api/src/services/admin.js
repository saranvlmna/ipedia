const { Admin } = require("../db");
const passwordService = require("../services/password");


module.exports = {
    signupAdmin: async (data) => {
        let existingUser;

        existingUser = await Admin.findByEmail(data.email)
        if (existingUser) {
            throw new Error("Admin Already exists with this Email id")
        }

        existingUser = await Admin.findByMobile(data.phone)
        if (existingUser) {
            throw new Error("User Already exists with this Mobile Number")
        }

        data.password = await passwordService.encrypt(data.password)
        return await Admin.create(data);
    },



    loginAdmin: async (auth) => {
        let existingUser;
        existingUser = await Admin.findByEmail(auth.email)
        if (!existingUser) {
            throw new Error('admin Does not Exists');
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

