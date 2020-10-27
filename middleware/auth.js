// Importamos las dependencias necesarias
const jwt = require ('jsonwebtoken');
const { CustomerModel } = require ('../models/customer');

// Funcion
const auth = async ( req, res, next ) => {

    try {
       
        const token = req.headers.authorization;
        const payload = jwt.verify ( token, )
        const customer = await CustomerModel.findById ( payload._id );
        
        if ( !customer ) { return res.send.status (401).send ({ message: 'Error en los datos introducidos.' }) }
        req.customer = customer;
        next ()
        
    } catch (error) {
        console.error ( error )
        return res.status (401).send ({ message: 'Error en los datos introducidos' })
    }
}

// Exporto el archivo
module.exports = auth;