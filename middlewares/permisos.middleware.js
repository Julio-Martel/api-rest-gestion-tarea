const usuarios = require('../database/usuarios');
const utils = require('../utils/utils')


const loginUsuario = (req, res, next) => {
    
    if(!req.body || utils.validarBody(req.body)){
        return res.status(403).json({
            mensaje: 'Debe rellenar la casilla body'
        })
    } 

    const {usuario,password} = req.body;

    if(!usuario || !password){
        return res.status(403).json({
            mensaje: 'Los campos deben estar llenos'
        })
    }

    const usuarioExistente = usuarios.find(u => u.usuario === usuario && u.password === password)

    if(usuarioExistente === undefined){
        return res.status(403).json({
            mensaje: 'Usuario no encontrado'
        })
    }

    next();
}

module.exports = {loginUsuario};