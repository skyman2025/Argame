'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

// Insertar datos en la tabla Users
    await queryInterface.bulkInsert('Users', [
  {
    "userId": "1",
    "firstName": "admin",
    "lastName": "admin",
    "email": "badmin@gmail.com",
    "password": "admin123",
    "avatar": "/images/avatars/polloCorazon.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "userId": "_m64fc5882",
    "firstName": "arturo",
    "lastName": "Camelot",
    "email": "admin@gmail.com",
    "password": "$2b$10$2Nd4VFCQX8k7m1L.2WuHd.K00iHwmAzbPhj5.XDvojlPYFDQ/JvkO",
    "avatar": "public/images/users/6de5f829a97f22ac2a78a86e4e3816c9",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    "userId": "_95sowcsk4",
    "firstName": "Otto",
    "lastName": "Melara",
    "email": "user21@gmail.com",
    "password": "$2b$10$BTC/cuPZNZsEHm1WSelhM.KUSYyciNVVaNI7hUu9ncQoi2bDMW/7m",
    "avatar": "public/images/users/64b93af04b99c53fec5797728aa25c4d",
    createdAt: new Date(),
    updatedAt: new Date()
  }
      // Puedes añadir más objetos para insertar más registros
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

   await queryInterface.bulkDelete('Users', null, {});
     
  }
};

