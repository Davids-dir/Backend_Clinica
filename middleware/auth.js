// Importamos las dependencias necesarias
const jwt = require ('jsonwebtoken');
const CustomerModel = require('../models/customer');

// Creamos el metodo de autentificacion
const auth = async ( req, res, next ) => {
    try {
    
        const token = req.headers.authorization;
        const payload = jwt.verify ( token, 'secreto' );
        const customer = await CustomerModel.findById ( payload._id );

        if ( ! customer ) {
            return res.status (401).send ({ message: 'No dispones de los permisos necesarios.' })
        }
        req.customer = customer;
        next ()

    } 
    catch (error) {
        console.error ( error )
        return res.status (401).send ({ message: 'No dispones de los permisos necesarios.' })
    }
}

// Exportamos el metodo
module.exports = auth;