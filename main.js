// Inicio de la Aplicacion
const express = require ('express');
const morgan = require('morgan');
const app = express ();
const PORT = process.env.PORT || 3001;
const CORS = require ('./middleware/cors');

// Acceso al archivo de configuracion de la DB
const dbConnect = require ('./config/db_connect');

// Rutas de acceso a los Controladores de las tablas
const customersRouter = require ('./routes/customers');
const datesRouter = require ('./routes/dates');
const { loggers } = require('winston');

// Middleware
app.use (express.json ());
app.use (CORS);
app.use (morgan ('combined', {stream: loggers.stream}))

// Rutas de uso y ENDPOINTS
app.use ('/customers', customersRouter);
app.use ('/dates',datesRouter);

// Conexion a la Base de Datos
dbConnect ();

// Inicio del servidor
app.listen (PORT, () => console.log ('Server is up at PORT...' + PORT));