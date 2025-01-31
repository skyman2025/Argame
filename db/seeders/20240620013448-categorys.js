'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

// Insertar datos en la tabla Users
    await queryInterface.bulkInsert('Categorys', [
  {
    "catId": "p",
    "name": "Play Station",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "catId": "n",
    "name": "Nintendo",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "catId": "x",
    "name": "Xbox",
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    "catId": "a",
    "name": "Accesorios",
    createdAt: new Date(),
    updatedAt: new Date()
  }
      // Puedes añadir más objetos para insertar más registros
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar los datos insertados en la tabla Users
    await queryInterface.bulkDelete('Categorys', null, {});
  }
  
};

