'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//agrege esto para verificar la conneccion desde el front
// Función para verificar la conexión a la base de datos
async function checkDatabaseConnection() {
  try {
    await Sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    return true;
  } catch (error) {
    console.error('Error de conexión a la base  (intenta autenticar) de datos:', error);
    return false;
  }
}
// seccion testconeccion ---fin --------------------------------
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.checkDatabaseConnection = checkDatabaseConnection; // Exporta la función de verificación de conexión
//console.log (db);//  para ver si realmente se guardo en db y si se guardo...
module.exports = db;
