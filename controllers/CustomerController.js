// Requisitos del archivo y accesos
const CustomerModel = require ('../models/customer');
const mongoose = require ('mongoose');
const crypt = require ('bcrypt');
const saltRounds = 9;
const fs = require ('fs');
const { findOne } = require('../models/customer');

// Creacion del objeto y sus metodos
const CustomerController = {

    // Metodo para Registrar un nuevo cliente en la DB
    async signup  (req, res) {
        
        try {

            // Encriptado de la contraseña
            let encryptPass = await crypt.hash (req.body.password, saltRounds)

            const newCustomer = await new CustomerModel ({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: encryptPass
            }).save ();
            
            res.status (201).send ({ message: 'Cliente dado de alta con exito.' });
        } 
        catch (error) {
            res.status (500).send ({ message: 'No se ha podido dar de alta al cliente.' });
        }
    },

    // Metodo para realizar LOGIN
    async login (req, res) {

        try {

            const loginCostumer = await CustomerModel.findOne ({
                email: req.body.email,
            })
             
            if ( ! loginCostumer ) {
                res.status (201).send ({ message: 'Las credenciales introducidas no son validas.'})
            }
            else {
                let passCheck = await crypt.compare (req.body.password, loginCostumer.password);

                if ( passCheck ) {
                    res.status (201).send ({ message: `Bienvenido de nuevo ${ loginCostumer.name}.` })
                }
                else {
                    res.status (201).send ({ message: 'Las credenciales introducidas no son validas.'})
                };
            };
        } 
        catch (error) {
            res.status (500).send ({ message: 'Se ha producido un error.', error})
        }
    },

    // Metodo para realizar LOGOUT de la aplicacion
    async logout (req, res) {

        try {
            const logoutCostumer = await CustomerModel.findOne ({
                email: req.params.email
            })

            if ( ! logoutCostumer ) {
                res.status (201).send ({ message: 'Las credenciales introducidas no son validas.'})
            }
            else {
                res.status (201).send ({ message: 'La sesion se ha cerrado correctamente.' })
            }       
        }
        catch (error) {
            res.status (500).send ({ message: 'Se ha producido un error.', error})
        };
    }
}

// Exporto el acceso al archivo
module.exports = CustomerController;