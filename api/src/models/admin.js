const { Schema, model } = require('mongoose')
const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
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

module.exports = model("Admin", schema)