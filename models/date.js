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
    done: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String
    }
})

module.exports = DateModel;