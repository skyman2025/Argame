var express = require('express');
var router = express.Router();

const fs = require('fs');
const jsonData = require('../data/products.json');

const  user ={
	"firstName": "invitado"
}


/* GET detalle page. */

router.get('/detalle', function(req, res, next) {
  res.render('detalle', { title: 'Detalle',user:user});
});

/* GET detalle page. */
router.get('/detalle/:id', function(req, res, next) {

    const elementoId = parseInt(req.params.id);
    
    // Filtrar el JSON por el ID proporcionado
    const elemento = jsonData.find(item => item.id === elementoId);
    
    // Renderizar la vista con el elemento filtrado
    res.render('detalle', { title: 'Detalle',elemento: elemento, user:user });
});
module.exports = router;
