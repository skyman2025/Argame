var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const fs = require("fs");
const methodOverride = require('method-override');

const multer = require('multer');

//const upload = multer({dest: 'views/users/uploads/'});

const bodyParser = require('body-parser');

const Sequelize = require('sequelize');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/adminpage');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var detalleRouter = require('./routes/detalle');
var listadoRouter = require('./routes/listado');
var carritoRouter = require('./routes/carrito');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/adminapi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));// determina si se deben analizar objetos URL codificados con la biblioteca qs (cuando extended es true) o con la biblioteca querystring de Node.js (cuando extended es false).
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/', adminRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', carritoRouter);
app.use('/', detalleRouter);
app.use('/', listadoRouter);
app.use('/', usersRouter);
app.use('/', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
