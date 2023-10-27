//Importar las bibliotecas
const express = require("express");
const app = express();
const personaRoutes=require('./routes/persona')
const proyectoRoutes = require('./routes/proyecto')
// Traer el objeto de conexion
const sequelize = require('./util/database')

//middleware
app.use(express.json()); // pa saber que son JSON
app.use('/persona', personaRoutes);
app.use('/proyecto',proyectoRoutes);

//mala practica
app.get('/test',(request, response)=>{
    console.log("Esto no se debe hacer pero funciona 🥲");
    response.send('<h1>Servidor Funcionando</h1>');
})


//levantar el server y escuchar peticiones 
sequelize.sync()
    .then(result=>{
        app.listen(8080, callback =>{
            console.log("Servidor escuchando 😆 ");
        })
    })
    .catch(error => console.log(error));

