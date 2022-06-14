const express = require('express');
const router = express.Router();
const ctrl = require('../database/controller')

//const auth = require('../middlewares/authentication')


router.get('/users/all', ctrl.getAllUsers);
router.post('/users/login', ctrl.signin);

module.exports = router;