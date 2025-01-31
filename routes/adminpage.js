var express = require('express');
var router = express.Router();

const fs = require("fs");
const methodOverride = require('method-override');

const  user ={
    "firstName": "Administrador"
}


/* GET Admin page. */
router.get('/adminpage', function(req, res, next) {

    res.render('adminpage',{ title: 'AdminPage',user:user});
});

/*----------------  seccion formulario de admin----------------------*/

router.post('/crear', (req, res) => {


    const nuevoElemento = {
        id: generateId(), // Generar un ID único
        name: req.body.nombre,
        description: req.body.descripcion,
        category: req.body.category,
        price: req.body.price
    };

    // Leer el archivo JSON y agregar el nuevo elemento
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return;
        }

        const jsonData = JSON.parse(data);
        jsonData.push(nuevoElemento);

        // Escribir de vuelta en el archivo JSON
        fs.writeFile('./data/products.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
                return;
            }
            
            console.log('Nuevo elemento creado:', nuevoElemento);
                //res.send(`ID del usuario: ${userId}`);// para mostrar en front la variable sino daria error
             res.status(200).send('Elemento CREADO correctamente VUELVA A LA PAGINA ANTERIOR PARA CONTINUAR ');
        });
    });
});

// Ruta para actualizar un elemento en el archivo JSON
router.post('/actualizar', (req, res) => {
    const id = req.body.id;
    const nuevoNombre = req.body.nuevoNombre;
    const nuevaDescripcion = req.body.nuevaDescripcion;

    // Leer el archivo JSON y buscar el elemento por su ID
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return;
        }

        const jsonData = JSON.parse(data);
        const elemento = jsonData.find(item => item.id === id);

        // Actualizar los datos del elemento
        if (elemento) {
            if (nuevoNombre) elemento.name = nuevoNombre;
            if (nuevaDescripcion) elemento.description = nuevaDescripcion;

            // Escribir de vuelta en el archivo JSON
            fs.writeFile('./data/products.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }
                console.log('Elemento actualizado:', elemento);
                     res.status(200).send('Elemento ACTUALIZADO correctamente VUELVA A LA PAGINA ANTERIOR PARA CONTINUAR ');
            });
        } else {
            console.error('Elemento no encontrado con ID:', id);
                res.status(200).send('Elemento ACTUALIZADO correctamente VUELVA A LA PAGINA ANTERIOR PARA CONTINUAR ');
        }
    });
});

// Ruta para eliminar un elemento del archivo JSON
router.post('/eliminar', (req, res) => {
    const id = req.body.id;

    // Leer el archivo JSON y eliminar el elemento por su ID
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return;
        }

        let jsonData = JSON.parse(data);
        const elementoIndex = jsonData.findIndex(item => item.id === id);

        if (elementoIndex !== -1) {
            const eliminado = jsonData.splice(elementoIndex, 1)[0];

            // Escribir de vuelta en el archivo JSON
            fs.writeFile('./data/products.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }
                console.log('Elemento eliminado:', eliminado);
                  // res.send('Elemento eliminado correctamente: ',eliminado);
                   res.status(200).send('Elemento eliminado correctamente VUELVA A LA PAGINA ANTERIOR PARA CONTINUAR ');
            });
        } else {
            console.error('Elemento no encontrado con ID:', id,'vuelva a la pagina anterior para continuar');
                     res.status(200).send('Elemento eliminado correctamente VUELVA A LA PAGINA ANTERIOR PARA CONTINUAR ');
        }
    });
});

// Función para generar un ID único
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}


module.exports = router;