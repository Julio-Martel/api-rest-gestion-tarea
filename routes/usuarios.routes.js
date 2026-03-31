const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarios.controllers');
const middlewares = require('../middlewares/permisos.middleware');
const authMiddlewares = require('../middlewares/auth.middleware');

router.post('/registro', usuarioController.registrarUsuario);
router.post('/login', middlewares.loginUsuario,authMiddlewares.validarUsuarioPorRol);
router.get('/',middlewares.loginUsuario,authMiddlewares.validarUsuarioPorRol, usuarioController.mostrarTodosLosUsuarios);
router.delete('/',middlewares.loginUsuario,authMiddlewares.validarUsuarioPorRol, usuarioController.eliminarUsuario);

module.exports = router;