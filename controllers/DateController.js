const DateModel = require ('../models/date');
const mongoose = require ('mongoose');
const fs = require ('fs');

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
            res.status (500).send ({ error})
        }
    },
}

module.exports = DateController;