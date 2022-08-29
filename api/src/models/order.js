const { Schema, model } = require("mongoose");

const schema = new Schema({
    product: {
        type: String
    },
    user: {
        type: String
    },
    deliveryAddress: {
        type: String
    },
    promiseDate: {
        type: Date,
    },
    isDeliverd: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    }
});

module.exports = model("order", schema);