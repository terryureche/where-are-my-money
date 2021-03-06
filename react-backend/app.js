var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

var app = express();

import { getUserApi, getUsersAllApi } from "./api/user/get.js";
import { createCardApi } from "./api/card/create.js";
import { getCardApi, getCardsAllApi } from "./api/card/get.js";
import { createUserApi } from "./api/user/create.js";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post("/api/v1/card", createCardApi);
app.post("/api/v1/user", createUserApi);
app.get("/api/v1/user/:name", getUserApi);
app.get("/api/v1/card/:name", getCardApi);
app.get("/api/v1/getAllUsers", getUsersAllApi);
app.get("/api/v1/getAllCards", getCardsAllApi);

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
