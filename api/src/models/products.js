const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    }
});
module.exports = model("Prdcs", schema);