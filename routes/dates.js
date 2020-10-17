const router = require ('express').Router ();

// Acciones sobre la tabla de citas y ENDPOINTS
router.post ('/create', DateController.newDate);

module.exports = router;