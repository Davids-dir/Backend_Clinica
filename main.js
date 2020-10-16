// Inicio de la Aplicacion
const express = require ('express');
const app = express ();
const dbConnect = require ('./config/db_connect');

// Middleware
app.use (express.json ());

// Routes


// Connection
dbConnect ();

// Server Log
app.listen (3000, () => console.log ('Server is up...'));