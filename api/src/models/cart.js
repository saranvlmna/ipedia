const { Schema, model } = require("mongoose");

const schema = new Schema({
    products: [
        {
            'quantity': 0,
            'product': {
                type: Schema.Types.ObjectId,
                ref: 'product',
            }
        }
    ],
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

module.exports = model("cart", schema);