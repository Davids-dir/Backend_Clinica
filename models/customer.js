const mongoose = require ('mongoose');

// Modelo de la tabla CLIENTES
const CustomerSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'date',
    },]
})

const CustomerModel = mongoose.model ('customer', CustomerSchema);


module.exports = CustomerModel;