const mongoose = require ('mongoose');
const CustomerModel = require('../models/customer');
const DateModel = require ('../models/date');
const { findById, findOne, find } = require('../models/date');

// Creacion del objeto y sus metodos
const DateController = {

    // Crear una cita y asignarla al cliente
    async create (req, res) {

        try {
            const newDate = await DateModel .create ({
                reason: req.body.reason,
                day: req.body.day,
                notes: req.body.notes,
                customer: req.params._id
            })

            // Añadir la cita creada al cliente
            const customer = await CustomerModel.findByIdAndUpdate ( req.params._id, { $push: {dates: newDate._id}})

            res.status (201).send ({ newDate, message: `La cita ha sido creada con exito para el dia ${newDate.day}.`});
        } 
        catch (error) {
            res.status (500).send ({ error, message: 'Ha surgido un error al crear la cita.'})
        }
    },

    // Mostrar las citas de un cliente
    async dates (req, res) {
        try {
            const showDates = await CustomerModel.findById ( req.params._id ).populate ('dates')
            res.status (200).send ({ showDates })
        } 
        catch (error) {
            res.status (500).send ({ message: 'Ha habido un problema al realizar la operacion.' })
        }
    },
    
    // Cancelar una cita especifica
    async cancelDate ( req, res ) {
        try {
            const remove = await DateModel.findByIdAndDelete ( req.params._id )
            await CustomerModel.findOneAndUpdate ({ dates: req.params._id }, { $pull: {dates: req.params._id }})
            res.status (201).send ({ message: 'La cita ha sido cancelada con exito.' })
        }   
        catch (error) {
            res.status (500).send ({ message: 'Ha habido un problema al realizar la operacion.', error })
        }
        }
}

// Exporto el archivo
module.exports = DateController;