const express = require('express');
const app = express();

const usuariosRoutes = require('./routes/usuarios.routes');
const taresRoutes = require('./routes/tareas.routes');

app.use(express.json());

app.use('/usuarios', usuariosRoutes);
app.use('/tareas', taresRoutes)


app.listen(3000,() => {
    console.log('Servidor activo!');
})