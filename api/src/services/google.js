const { User } = require("../db");
const FRONTEND_URL = process.env.FRONTEND_URL;
const sendMail = require("./mail");

module.exports = {
  verify: async (accessToken, refreshToken, profile, callback) => {
    const query = {
      name: profile._json.name,
      email: profile._json.email,
      picture: profile._json.picture,
      accessToken: accessToken,
      refreshToken: refreshToken
    };
    const user = await findOrCreate(query);
    return callback(null, user);
  },

  serializeUser: (user, callback) => {
    return callback(null, user);
  },

  deserializeUser: (user, callback) => {
    return callback(null, user);
  },

  callback: async (req, res) => {
    const currentUser = req.user ? req.user : null;
    res.cookie("currentUser", currentUser, {
      expires: new Date(Date.now() + 900000)
    });
    res.redirect(`${FRONTEND_URL}`);
  }
};

const findOrCreate = async (user) => {
  let existingUser;
  existingUser = await User.findByEmail(user.email);
  if (!existingUser) {
    existingUser = await User.create(user);
    const mail = {
      to: existingUser.email,
      subject: "Congratulations! You’re In vLmNa Now"
    };
    sendMail.Mail(mail);
    return existingUser;
  } else {
    return existingUser;
  }
};
