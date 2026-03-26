const generarId = require('../utils/utils')
const usuarios = require('../database/usuarios');
const validarBody = require('../utils/utils');

const registrarUsuario = (req,res) => {
    const {usuario, password, role} = req.body;

    if(validarBody.validarBody(req.body)){
         return res.status(400).json({
            mensaje: "Debe enviar algo en el body"
        })       
    }

    if(!usuario || !password || !role){
        return res.status(400).json({
            mensaje: "datos invalidos"
        })
    }

    const usuarioExistente = usuarios.find(u => u.usuario === usuario);     

    if(usuarioExistente){
        return res.status(400).json({
            mensaje: 'Nombre de usuario repetido. Use otro'
        })
    } else {
        const nuevoUsuario = {
            id: generarId(),
            usuario: usuario,
            password: password,
            role: role
        }
    
        usuarios.push(nuevoUsuario);
    
        return res.status(201).json({
            mensaje: 'Nuevo usuario registrado'
        })
    }
}

module.exports = registrarUsuario;