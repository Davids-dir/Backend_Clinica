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
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(v);
            },
            message: () => 'La contraseña debe contener al menos una minúscula, una mayúscula, un número,un carácter especial, y debe estar entre 8 y 10 carácteres de longitud!'
        },
    },
    debt: {
        type: Number
    },
    dates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'date',
    },],
    role :{
        type: String,
        enum: ['admin', 'customer']
    }
})

const CustomerModel = mongoose.model ('customer', CustomerSchema);


module.exports = CustomerModel;