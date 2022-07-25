const { User } = require("../db");
const PasswordService = require("./password")
const { BadRequestError } = require("../errors");
const { validateEmail } = require("../utils");

create = async (auth) => {
    let existinguser;
    existinguser = await findByEmail(auth.email)
    if (existinguser) {
        throw new BadRequestError("User Alredy exists with this Email id")
    }
    existinguser = await findByMobile(auth.number)
    if (existinguser) {
        throw new BadRequestError("User Alredy exists with this Mobile Number")
    }
    auth.password = await PasswordService.encrypt(auth.password)
    return await User.create(auth);
}

login = async (auth) => {
    try {
        return new Promise(async (resolve, reject) => {
            if (!validateEmail(auth.email)) {
                throw new BadRequestError("Email is Invalid")
            }
            let existinguser;
            existinguser = await findByEmail(auth.email)
            if (!existinguser) {
                throw new BadRequestError("User Does not Exists")
            }
            let isValid;
            isValid = await PasswordService.compare(auth.password, existinguser.password)
            if (!isValid) {
                throw new BadRequestError("Password is Invalid")
            }
            else if (isValid) {
                resolve(existinguser)
            }
        })

    } catch (error) {
        reject(error)
    }



}

findByEmail = async (email) => {
    if (!validateEmail(email)) {
        throw new BadRequestError("Email is Invalid")
    }
    return await User.findByEmail(email)
}

findByMobile = async (mobile) => {
    return await User.findByMobile(mobile)
}

module.exports = {
    create,
    login
}