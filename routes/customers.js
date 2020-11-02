// Requisitos del archivo y accesos
const router = require ('express').Router ();
const CustomerController = require ('../controllers/CustomerController');
const auth = require ('../middleware/auth');

// Acciones del cliente y ENDPOINTS
router.post ('/signup', CustomerController.signup);
router.post ('/login', CustomerController.login);

router.get ('/profile', CustomerController.profile );
router.get ('/logout/:email', CustomerController.logout);

// Exporto el acceso al archivo
module.exports = router;