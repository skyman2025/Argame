var express = require('express');
var router = express.Router();
const data = require('../data/products.json');

const  user ={
	"firstName": "administrador"
}

/* GET detalle page. */
router.get('/listado', function(req, res, next) {
  res.render('listado', { title: 'Listado',data:data, user:user });
});

module.exports = router;
