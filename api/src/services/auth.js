const { User } = require("../db");
const PasswordService = require("./password")
// const { findByEmail, findByMobile } = require("../db/auth");
const { BadRequestError } = require("../errors");
const auth = require("../models/auth");
const { validateEmail } = require("../utils");

async function create(auth) {
    try {
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
        auth = await User.create(auth);

    } catch (error) {
        console.log(error)
    }

}

async function login(auth,) {
    try {
        return new Promise(async (resolve, reject) => {
            if (!auth.email && !auth.password) {
                throw new BadRequestError("Email or Password is required")
            }
            else if (!validateEmail(auth.email)) {
                throw new BadRequestError("Email is Invalid")
            }
            let existinguser;
            existinguser = await findByEmail(auth.email)
            if (!existinguser) {
                throw new BadRequestError("User Does not Exists")
            }
            let isValid;
            isValid = await PasswordService.compare(auth.password, existinguser.password)
            if (isValid) {
                resolve(existinguser)
            }
        })
        
    } catch (error) {
        console.log(error)
    }



}

async function findByEmail(email) {
    if (!email) {
        throw new BadRequestError("Email is required")
    }
    if (!validateEmail(email)) {
        throw new BadRequestError("Email is Invalid")
    }
    return await User.findByEmail(email)
}

async function findByMobile(number) {
    if (!number) {
        throw new BadRequestError("Mobile Number Is required")
    }
}

module.exports = {
    create,
    login
}