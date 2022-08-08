const { Schema, model } = require('mongoose')
const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    picture: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model("User", schema)