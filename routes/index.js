var express = require('express');
var router = express.Router();

const  user ={
	"firstName": "invitado"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index',user:user });
});

module.exports = router;