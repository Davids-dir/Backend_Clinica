const dbConnect = () => {

    const mongoose = require ('mongoose');
    const URI ='mongodb+srv://David_Admin:Jj0LlXiLsUTAF9GW@bootcamp.xi7ll.mongodb.net/agenda_clinica?retryWrites=true&w=majority';

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