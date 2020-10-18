const mongoose = require ('mongoose');
const CustomerModel = require('../models/customer');
const DateModel = require ('../models/date');
const { findById, findOne, find } = require('../models/date');

// Creacion del objeto y sus metodos
const DateController = {

    // Crear una cita y asignarka al cliente
    async create (req, res) {

        try {
            const newDate = await new DateModel  ({
                reason: req.body.reason,
                day: req.body.day,
                notes: req.body.notes
            })

            // Añadir la cita creada al cliente
            const customer = await CustomerModel.findById ( req.params )
            newDate.customer = customer;
            await newDate.save ();
            customer.dates.push (newDate);
            await customer.save ();

            res.status (201).send ({ newDate, message: `La cita ha sido creada con exito para el dia ${newDate.day}.`});
        } 
        catch (error) {
            res.status (500).send ({ error, message: 'Ha surgido un error al crear la cita.'})
        }
    },

    // Mostrar las citas de un cliente
    async dates (req, res) {
        try {
            const showDates = await CustomerModel.findById ( req.params ).populate ('dates')
            res.status (200).send ({ showDates })
        } 
        catch (error) {
            res.status (500).send ({ message: 'Ha habido un problema al realizar la operacion.' })
        }
    },
    
    // Cancelar una cita especifica
    async cancelDate ( req, res ) {
        try {
            const remove = await DateModel.remove ({
                _id: req.params.id
            }).deleteOne ();
            res.status (201).send ({ message: 'La cita ha sido cancelada con exito.' })
        } 
        catch (error) {
            res.status (500).send ({ message: 'Ha habido un problema al realizar la operacion.', error })
        }
    }
}

// Exporto el archivo
module.exports = DateController;