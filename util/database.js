//Como utilizar la herramienta ORM Sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations')

//Configurar la conexion


const sequelize = new Sequelize('semanatec', 'admin', 'password', {
    dialect: 'mysql',
    host:'database-1.cp7kbknxvkmc.us-east-1.rds.amazonaws.com' , 
    define: {
        //Evitar que nos ponga createAt y updateAt
        timestamps: false,
        //Pluralizar
        freezeTableName: true
    }
});

//Cargar los modelos
const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
];

//Vincular el modelo con el objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//exportar el elemento de conexion
module.exports = sequelize;
