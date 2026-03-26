const generarId = require('../utils/utils')
const usuarios = require('../database/usuarios');

const registrarUsuario = (req,res) => {
    const {usuario, password, role} = req.body;

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