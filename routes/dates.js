const router = require ('express').Router ();
const DateController = require ('../controllers/DateController');

// Acciones sobre la tabla de citas y ENDPOINTS

router.post ('/create', DateController.create);
//router.get ('/show', DateController.show);

// router.delete ('/remove', DateController.remove);

module.exports = router;