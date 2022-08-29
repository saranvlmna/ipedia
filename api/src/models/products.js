const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: {
        type: String
    },
    detailedName: {
        type: String
    },
    description: {
        type: String
    },
    detailedDescription: {
        type: String
    },
    price: {
        type: Number
    },
    isOffer: {
        type: Boolean,
        default: false
    },
    offerPrice: {
        type: Number,
        default: 0
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    isStoke: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = model("product", schema);