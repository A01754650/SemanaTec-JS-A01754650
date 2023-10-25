//Importar las bibliotecas

const express = require("express");
const app = express();

//middleware
app.use(express.json()); // pa saber que son JSON

//mala practica
app.get('/test',(request, response)=>{
    console.log("Esto no se debe hacer pero funciona 🥲");
    response.send('<h1>Servidor Funcionando</h1>');
})


//levantar el server y escuchar peticiones 
app.listen(8080, callback =>{
    console.log("Servidor escuchando 😆 ")
})
