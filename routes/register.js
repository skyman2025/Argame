var express = require('express');
var router = express.Router();

const multer = require('multer');

const fs = require("fs");
const methodOverride = require('method-override');

const upload = multer({dest: 'public/images/users/'});

const bcrypt = require('bcrypt');

// Configuración de Multer para almacenar con nombre de archivo con iduser-------

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Directorio donde se guardarán los archivos
//   },
//   filename: function (req, file, cb) {
//     // Accede a la constante filename que has creado
//     const userId = req.body.usuario;
//     const filename = userId + '-' + Date.now() + '-' + file.originalname;
//     cb(null, filename); // Utiliza el nombre de archivo generado
//   }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;

//--------------------------------------------------------------------
const  user ={
	"firstName": "invitado"
}

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Registro',user:user });
});


router.post('/register', upload.single('imagenPerfil'),  function (req, res) {

	    const { usuario, password,nombre,apellido,email } = req.body;

		// Encriptar la contraseña
		bcrypt.hash(password, 10, function(err, hashedPassword) {
		    if (err) {
		      console.error('Error al encriptar la contraseña:', err);
		      return res.status(500).send('Error interno del servidor');
		    }
        console.log(req.file);// obtiene  info del archivo de imagen

		const userId = usuario;//podria usarse
	    // const filename = userId + '-' + Date.now() + '-' + req.file.originalname;   // se puede agregar este nombre de archivo se lo considerara luego
	    
	    const nuevoElemento = {
	        id: generateId(), // Generar un ID único
	        password:hashedPassword,
	        firstName:nombre,
	        lastName:apellido,
	        email:email,
	        //category: req.body.category,
	        avatar: req.file.path
	    };

    // Leer el archivo JSON y agregar el nuevo elemento
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return;
        }

        const jsonData = JSON.parse(data);
        jsonData.push(nuevoElemento);

        // Escribir de vuelta en el archivo JSON
        fs.writeFile('./data/users.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
                return;
            }
            
                console.log('Nuevo elemento creado:', nuevoElemento);
           //  res.send(`ID del usuario: ${userId}`);// para mostrar en front la variable sino daria error
            res.status(200).send('Elemento CREADO correctamente VUELVA A LA PAGINA ANTERIOR PARA CONTINUAR ');
              
                // const  user ={
                //     "firstName": nuevoElemento.firstName
                // }
                // console.log('Usuario Registrado');
                // res.render('index',{user:user});

        });
    });
  });
});

// Función para generar un ID único
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

module.exports = router;
