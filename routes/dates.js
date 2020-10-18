// Requisitos del archivo y accesos
const router = require ('express').Router ();
const DateController = require ('../controllers/DateController');

// Acciones sobre la tabla de citas y ENDPOINTS
router.post ('/create', DateController.create);

router.get ('/show/:id', DateController.show);

router.delete ('/remove/:id', DateController.cancelDate);

// Exporto el acceso al archivo
module.exports = router;