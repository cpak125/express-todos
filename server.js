var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Mount middleware to the request pipeline
app.use([path], <middleware fn>, [<middleware fn>, ..]) */

app.use(function(req, res, next) {
  console.log('Hello SEI!');
  // app.locals allows us to pass additional 
  // info/data to a view
  app.locals.time = new Date().toLocaleTimeString();
  next();
});

// logs the info about the request/response
app.use(logger('dev'));

// will parse the request's body if the data is JSON
// i.e., the Content-Type header = 'application/json'
// it adds properties to req.body
app.use(express.json());

// like .json(), except it looks for and processes
// Content-Type: x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// process the cookies header and add prop to the
// req.cookies object
app.use(cookieParser());

// static middleware delivers static assests when
// requested by the browser
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// '/todos' is the "starts with" path
// ALL routes defined in the the todosRouter will start with '/todos'
// The pathes in todosRouter will be appended to the starts with path('/todos)
app.use('/todos', todosRouter);

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
