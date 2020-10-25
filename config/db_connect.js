const dbConnect = () => {

    const mongoose = require ('mongoose');
    const URI = process.env.URI ||  'mongodb+srv://David_Admin:v4OSfaZtEmqxhh9l@bootcamp.xi7ll.mongodb.net/agenda_clinica?retryWrites=true&w=majority';
   

    //'mongodb://localhost:27017/Clinica_Local'
    mongoose.connect ( URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then (() => { console.log ('Connected to Database.')})
    .catch ( error  => console.log ("Can't connect to Database." + error ));  
}

// Exporto el acceso al archivo
module.exports = dbConnect;