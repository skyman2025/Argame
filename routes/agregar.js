
var express = require('express');
var router = express.Router();

// Ruta para manejar la solicitud POST
router.post('/agregar', function(req, res, next) {
    // Obtener los datos enviados en el cuerpo de la solicitud
    var data = req.body;

// función `guardarEnJSON` que escribe en un archivo JSON
    guardarEnJSON(data);

    // Responder al cliente
    res.send('Datos recibidos y almacenados correctamente');
});

module.exports = router;