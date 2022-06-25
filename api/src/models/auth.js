const {Schema, model} = require("mongoose");

const schema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    number: {
        type: Number
    },
});
module.exports = model("User", schema);