const express = require('express');
const router = express.Router();
 
const db  = require('../db/models/index.js'); //aqui el error se corrigio al importar db sin los {} ya que estos deseestructuran y aumentan la especifidad al buscar el modulo exportado
//const Users  = db.Users
const { Sequelize, DataTypes } = require('sequelize');
const { Categorys, Products, Shopping, Users } = require('../db/models'); // Asegúrate de ajustar la ruta al archivo donde están definidos tus modelos

// Ruta para mostrar todos los usuarios
router.get('/adminapi', async (req, res) => {
  console.log(Users);
  try {
    const usuarios = await Users.findAll();
    res.send(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error interno del servidor');
  }
});
// esta parte deberia ser redifinada ya que la coneccion no se establece debido a la forma en que esta configurado index para guardar todo como un json pero index no se incluye como modelo a si mismo
router.get('/adminapi/test', async (req, res) => {
  try {                     
    const connected = await db.checkDatabaseConnection;
    if (connected) {
      res.status(200).json({ message: 'Conexión a la base de datos establecida correctamente.' });
    } else {
      throw new Error('No se pudo establecer conexión a la base de datos.');
    }
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


// // Ruta para crear un nuevo usuario
// router.post('/', async (req, res) => {
//   try {
//     await User.create(req.body);
//     res.redirect('index',{user:user});
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// });

// // Ruta para mostrar un usuario específico
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.render('users/show', { user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// });

// // Ruta para mostrar el formulario de edición de usuario
// router.get('/:id/edit', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.render('users/edit', { user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// });

// // Ruta para actualizar un usuario
// router.put('/:id', async (req, res) => {
//   try {
//     await User.update(req.body, {
//       where: { id: req.params.id }
//     });
//     res.redirect(`/users/${req.params.id}`);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// });

// // Ruta para eliminar un usuario
// router.delete('/:id', async (req, res) => {
//   try {
//     await User.destroy({
//       where: { id: req.params.id }
//     });
//     res.redirect('/users');
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// });

module.exports = router;