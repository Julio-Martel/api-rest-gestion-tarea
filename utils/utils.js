const usuarios = require('../database/usuarios');
const tareas = require('../database/tareas');


const validarBody = (body) => {
    if(!body || Object.keys(body).length === 0){
        return true;
    } else {
        return false;
    }
}

const generarId = () => {
    const nuevoId = (usuarios.length) + 1;

    return nuevoId;
}   

const generarIdTarea = () => {
    const nuevoIdTarea = (tareas.length) + 1;

    return nuevoIdTarea;
}

module.exports = {
    validarBody,
    generarId,
    generarIdTarea
};