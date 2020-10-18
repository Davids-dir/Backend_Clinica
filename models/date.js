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
    status: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String
    }
})

const DateModel = mongoose.model ('date', DateSchema);

module.exports = DateModel;