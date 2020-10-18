const mongoose = require ('mongoose');
const DateModel = require ('../models/date');
const { findById, findOne, find } = require('../models/date');

// Creacion del objeto y sus metodos
const DateController = {
    async create (req, res) {

        try {
            const newDate = await new DateModel  ({
                reason: req.body.reason,
                day: req.body.day,
                notes: req.body.notes
            }).save ();

            res.status (201).send ({ message: `La cita ha sido creada con exito para el dia ${newDate.day}.`});
        } 
        catch (error) {
            res.status (500).send ({ error, message: 'Ha surgido un error al crear la cita.'})
        }
    },

    async show (req, res) {
        
        try {
            const listDates = await DateModel.find ({ _id: req.params.id });
            res.status (201).send ( listDates )
        } 
        catch (error) {
            res.status (500).send ({ message: 'No hemos podido obtener la informacion requerida.'})
        }
    },
}

module.exports = DateController;