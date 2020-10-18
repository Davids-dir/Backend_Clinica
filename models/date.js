const mongoose = require ('mongoose');

// Modelo de la tabla citas
const DateSchema = mongoose.Schema ({
    reason: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: true
    },
    notes: {
        type: String
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }
})

const DateModel = mongoose.model ('date', DateSchema);

module.exports = DateModel;