// Inicio de la Aplicacion y accesos
const express = require ('express');
const app = express ();
const dbConnect = require ('./config/db_connect');
const customersRouter = require ('./routes/customers');

// Middleware
app.use (express.json ());

// Rutas de uso
app.use ('/customers', customersRouter);

// Conexion a la Base de Datos
dbConnect ();

// Inicio del servidor
app.listen (3000, () => console.log ('Server is up...'));