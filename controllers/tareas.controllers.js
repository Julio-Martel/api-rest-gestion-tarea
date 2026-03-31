const usuarios = require('../database/usuarios');
const tareas = require('../database/tareas');
const utils = require('../utils/utils');

const crearTarea = (req,res) => {
    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(403).json({
            mensaje: "Rellene el campo/s"
        })

    }
    const {usuario, password} = req.body;

    const obtenerUsuario = usuarios.find(u => u.usuario === usuario && u.password === password);
    const idUsuario = obtenerUsuario.id;

    const nuevaTarea = {
        id: utils.generarIdTarea(),
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        usuarioId: idUsuario
    }

    if(nuevaTarea.titulo === ''){
        return res.status(403).json({
            mensaje: 'La tarea debe tener un titulo'
        })
    }

    if(nuevaTarea.estado !== 'pendiente' && nuevaTarea.estado !== 'en progreso' && nuevaTarea.estado !== 'completado'){
        return res.status(403).json({
            mensaje: 'Debe tener un estado valido. Sea pendiente, en progreso o completado'
        })
    }

    tareas.push(nuevaTarea);

    return res.status(200).json({
        mensaje: 'Tarea creada con exito',
        tareas
    })
}


const validarPermiso = (req,res) => {
    const {usuario,password} = req.body;
    const filtrarUsuario = usuarios.find(u => u.usuario === usuario && u.password === password);

    const rolUsuario = filtrarUsuario.rol;

    if(rolUsuario === 'admin') {
        return res.status(200).json({
            mensaje: 'Tareas de todos los usuarios',
            tareas
        })
    } else {
        const tareasFiltradasDelUsuarioActual = tareas.filter(u => u.usuarioId === filtrarUsuario.id);
    
        return res.status(200).json({
            mensaje: `Tareas de ${filtrarUsuario.usuario}`,
            tareasFiltradasDelUsuarioActual
        });
            
    }
}

module.exports = {
    crearTarea,
    validarPermiso
}