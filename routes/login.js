var express = require('express');
var router = express.Router();

const fs = require('fs');
const bcrypt = require('bcrypt');

const  user ={
    "firstName": "invitado"
}

/* GET contact page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' ,user:user});
});


/*----------------seccion login admin -----------------------------*/
// Ruta para manejar el envío del formulario de inicio de sesión
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Leer el archivo JSON y buscar el elemento por su email y password
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
        }

    const jsonData = JSON.parse(data);
  
// para comparar las contraseñas, se debe encriptar la ingresada y compararla con la almacenada tambien encriptada
        // Encriptar la contraseña,crea hashedpasword para comparar
        bcrypt.hash(password, 10, function(err, hashedPassword) {
            if (err) {
              console.error('Error al encriptar la contraseña:', err);
              return res.status(500).send('Error interno del servidor');
            }
        });
//--------------------------------------------------------

    // Verificar las credenciales del administrador 
    if (email === 'admin@gmail.com' && password === 'admin123') {
        // Si las credenciales son válidas, redirigir al panel de administrador
            const  user ={
                "firstName": "Administrador"
            }
        console.log("administrador registrado encontrado");
        res.render('adminpage',{ title: 'Admin' ,user:user});
    } else {
            const elemento = jsonData.find(item => item.email === email & item.password === password);
            if (elemento) {
              // Si las credenciales son válidas,navega a la pagina home
              //  const name =elemento.firstName; 
                const  user ={
                    "firstName": elemento.firstName
                }
                console.log('Usuario Registrado Encontrado');
                res.render('index',{user:user});
            }else {
                console.log('Usuario No Encontrado'); 
                //res.send('NO ES UN USUARIO REGISTRADO REGRESE A LA PAGINA ANTERIOR PARA MAS OPCIONES');
                res.redirect('login',{ title: 'invitado' ,user:user});
                }
        
            };
        });
});

// seccion a considerar para login

// app.post('/login', (req, res) => {
//     const { usuario, password } = req.body;

//     // Leer el archivo JSON de usuarios
//     fs.readFile('./data/users.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error al leer el archivo JSON:', err);
//             return res.status(500).send('Error interno del servidor');
//         }

//         const users = JSON.parse(data);
//         const user = users.find(u => u.id === usuario);

//         if (!user) {
//             return res.status(404).send('Usuario no encontrado');
//         }

//         // Verificar la contraseña
//         bcrypt.compare(password, user.password, (err, result) => {
//             if (err) {
//                 console.error('Error al comparar contraseñas:', err);
//                 return res.status(500).send('Error interno del servidor');
//             }

//             if (result) {
//                 // Si la contraseña es correcta, mostrar los datos del usuario en el encabezado de la página de inicio
//                 res.send(`<h1>Bienvenido, ${user.firstName} ${user.lastName}</h1>`);
//             } else {
//                 res.status(401).send('Contraseña incorrecta');
//             }
//         });
//     });
// });

module.exports = router;


