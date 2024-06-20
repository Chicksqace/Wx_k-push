var express = require('express');

var routes = require('./routes/routes');

var app = express();
// app.set('view engine', 'pug');
app.use('/api', routes);
module.exports = app;

