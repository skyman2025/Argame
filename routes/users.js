var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users');
});


// Ruta para actualizar un elemento en el archivo JSON
router.post('/users/:id', (req, res) => {
    const id = req.body.id;
    // corregir esta seccion -------------------------------------------------
    const nuevoNombre = req.body.nuevoNombre;
    const nuevaDescripcion = req.body.nuevaDescripcion;

    // Leer el archivo JSON y buscar el elemento por su ID
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
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

module.exports = router;
