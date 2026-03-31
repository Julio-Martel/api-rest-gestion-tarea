const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/permisos.middleware');
const tareaControllers = require('../controllers/tareas.controllers');

router.post('/', middleware.loginUsuario, tareaControllers.crearTarea);
router.get('/', middleware.loginUsuario, tareaControllers.validarPermiso);

module.exports = router;

