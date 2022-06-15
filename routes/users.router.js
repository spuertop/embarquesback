const express = require('express');
const router = express.Router();
const ctrl = require('../database/controller')

//const auth = require('../middlewares/authentication')


router.get('/users/all', ctrl.getAllUsers);
router.post('/users/login', ctrl.signin);
router.use(ctrl.isAuthenticated);
router.get('/customers/all', ctrl.getAllEmpresas);
router.get('/delivery', ctrl.getAlbaranData);
router.put('/upload', ctrl.cargar);
router.put('/download', ctrl.descargar);

module.exports = router;