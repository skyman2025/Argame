var express = require('express');
var router = express.Router();

const user={
	"firstName":"invitado"
}

/* GET carrito page. */
router.get('/carrito', function(req, res, next) {
  res.render('carrito', { title: 'Carrito' ,user:user});
});

module.exports = router;