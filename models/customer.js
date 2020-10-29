// Importamos las dependencias necesarias
const mongoose = require ('mongoose');
const jwt = require ('jsonwebtoken');

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
        required: true
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
        enum: ['admin', 'customer'],
        default: 'customer'
    },
    token: {
        type: String
    }
});

// Metodo para asignar el token al usuario
CustomerSchema.methods.generateAuthToken = function () {

    const customer = this;
    const token = jwt.sign ({ _id: customer._id }, 'secreto', { expiresIn: '2m' });
    return token;
}

// Exporto el modelo
const CustomerModel = mongoose.model ('customer', CustomerSchema);
module.exports = CustomerModel;