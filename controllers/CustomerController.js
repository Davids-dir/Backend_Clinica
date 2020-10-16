// Requisitos del archivo y accesos
const CustomerModel = require ('../models/customer');
const mongoose = require ('mongoose');
const crypt = require ('bcrypt');
const fs = require ('fs');

// Creacion del objeto y sus metodos
const CustomerController = {
    async signup  (req, res) {
        try {
            const newCustomer = await new CustomerModel ({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password
            }).save ();
            
            res.status (201).send ({ message: 'Cliente dado de alta con exito.' });
        } 
        catch (error) {
            res.status (500).send ({ message: 'No se ha podido dar de alta al cliente.' });
        }
    },
}

// Exporto el acceso al archivo
module.exports = CustomerController;