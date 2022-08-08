const users = require('./user')

const verify = async (
    accessToken,
    refreshToken,
    profile,
    callback
) => {
    const query = {
        name: profile._json.name,
        email: profile._json.email,
        picture: profile._json.picture,
        accessToken: accessToken,
        refreshToken: refreshToken,
    }
    const user = await users.loginOrsignup(query);
    return callback(null, user);
}

const serializeUser = (user, callback) => {
    return callback(null, user);
};

const deserializeUser = (user, callback) => {
    return callback(null, user);
};

const callback = (req, res) => {
console.log(req.user)
}

module.exports.authService = {
    verify,
    serializeUser,
    deserializeUser,
    callback
}