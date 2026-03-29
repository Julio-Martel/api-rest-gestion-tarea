const usuarios = require('../database/usuarios');

const validarUsuarioPorRol = (req, res, next) => {
    const {usuario, password} = req.body;

    const usuarioFiltrado = usuarios.find(u => u.usuario === usuario && u.password === password)

    if(usuarioFiltrado.rol !== 'admin'){
        return res.status(200).json({
            mensaje: 'Necesita permisos de administrador para poder acceder a la base de datos'
        })
    }

    next();
}

module.exports = {
    validarUsuarioPorRol
}