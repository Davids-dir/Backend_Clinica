// Inicio de la Aplicacion
const express = require ('express');
const app = express ();

// Acceso al archivo de configuracion de la DB
const dbConnect = require ('./config/db_connect');

// Rutas de acceso a los Controladores de las tablas
const customersRouter = require ('./routes/customers');
const datesRouter = require ('./routes/dates');

// Middleware
app.use (express.json ());

// Rutas de uso y ENDPOINTS
app.use ('/customers', customersRouter);
app.use ('/dates', datesRouter);

// Conexion a la Base de Datos
dbConnect ();

// Inicio del servidor
app.listen (3000, () => console.log ('Server is up...'));