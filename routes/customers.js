// Requisitos del archivo y accesos
const router = require ('express').Router ();
const CustomerController = require ('../controllers/CustomerController');

// FALTA REALIZAR LAS ACCIONES DE CLIENTE
router.post ('/signup', CustomerController.signup);
router.get ('/login', CustomerController.login);

// Exporto el acceso al archivo
module.exports = router;