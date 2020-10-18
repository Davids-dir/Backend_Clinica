// Requisitos del archivo y accesos
const router = require ('express').Router ();
const DateController = require ('../controllers/DateController');

// Acciones sobre la tabla de citas y ENDPOINTS
router.post ('/create/:_id', DateController.create);

router.get ('/show/:_id', DateController.dates);

router.delete ('/remove/:_id', DateController.cancelDate);

// Exporto el acceso al archivo
module.exports = router;