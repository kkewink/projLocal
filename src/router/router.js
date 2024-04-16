const { Router } = require("express");
const locationController = require('../controller/locationController');

const router = Router();

router.get('/', locationController.getHome);
router.get('/contato', locationController.getContact);
router.get('/home', locationController.getHome);
router.get('/location', locationController.getAllLocation);
router.get('/formulario',locationController.getFormulario)
router.get('/newcontact', locationController.getnewcontact)

module.exports = router;