// Requisitos del archivo y accesos
const router = require ('express').Router ();
const CustomerController = require ('../controllers/CustomerController');

// Acciones del cliente y ENDPOINTS
router.post ('/signup', CustomerController.signup);
router.post ('/login', CustomerController.login);

router.get ('/logout/:email', CustomerController.logout);
router.get ('/dates/:_id', CustomerController.dates);

// Exporto el acceso al archivo
module.exports = router;