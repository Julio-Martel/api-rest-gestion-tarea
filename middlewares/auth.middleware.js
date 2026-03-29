const usuarios = require('../database/usuarios');
const utils = require('../utils/utils');

const validarUsuarioPorRol = (req, res, next) => {
    const {usuario, password} = req.body;

    const usuarioFiltrado = usuarios.find(u => u.usuario === usuario && u.password === password)

    if(usuarioFiltrado.rol === 'admin'){
        return res.status(200).json({
            mensaje: 'Puede realizar cambios en la base de datos de usuarios'
        })
    }

}

module.exports = {
    validarUsuarioPorRol
}