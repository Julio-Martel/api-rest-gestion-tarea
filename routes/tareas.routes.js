const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/permisos.middleware');
const tareaControllers = require('../controllers/tareas.controllers');
const authMiddlewares = require('../middlewares/auth.middleware')

router.post('/', middleware.loginUsuario, tareaControllers.crearTarea);
router.get('/', middleware.loginUsuario, tareaControllers.validarPermiso);
router.delete('/', middleware.loginUsuario, authMiddlewares.validarUsuarioPorRol, tareaControllers.eliminarTarea);


module.exports = router;

