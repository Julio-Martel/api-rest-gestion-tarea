const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarios.controllers')

router.post('/', usuarioController);

module.exports = router;