//Como utilizar la herramienta ORM Sequelize
const Sequelize = require('sequelize');

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
})

const Ejemplo = sequelize.define('ejemplo',{
    idTrabajo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: true
    }
})


const Ejemplo2 = sequelize.define('ejemplo2',{
    idTrabajo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: true
    }
})


//Prueba de conexion 
sequelize.sync()
    .then(result =>{
        console.log('Conexion ');
    })
    .catch(error => console.log(error));