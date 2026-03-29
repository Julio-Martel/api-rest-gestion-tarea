const utils = require('../utils/utils')
const usuarios = require('../database/usuarios');

const registrarUsuario = (req,res) => {
    const {usuario, password, role} = req.body;

    if(utils.validarBody(req.body)){
         return res.status(400).json({
            mensaje: "Debe enviar algo en el body"
        })       
    }

    if(!usuario || !password || !role){
        return res.status(400).json({
            mensaje: "Debe completar todos los campos"
        })
    }

    const usuarioExistente = usuarios.find(u => u.usuario === usuario);     

    if(usuarioExistente){
        return res.status(400).json({
            mensaje: 'Nombre de usuario registrado. Use otro'
        })
    } else {
        const nuevoUsuario = {
            id: utils.generarId(),
            usuario: usuario,
            password: password,
            role: role
        }
    
        usuarios.push(nuevoUsuario);
    
        return res.status(201).json({
            mensaje: 'Nuevo usuario registrado',
            usuarios
        })
    }
}

const mostrarTodosLosUsuarios = (req,res) => {
    return res.status(200).json({
        mensaje: "Todos los usuarios",
        usuarios
    })
}

module.exports = {
    registrarUsuario,
    mostrarTodosLosUsuarios
};