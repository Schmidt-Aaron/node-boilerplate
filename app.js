//load common packages
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');
const passport = require('passport');


//configure routing
const routes = require('./routes/index.js');

//fire it up
const app = express();

//configure view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set up static file access from the public directory
app.use(express.static('public'));

//add other middleware here...
//...

//set routes
app.use('/', routes);

//add errorHandling
//..

//export all of the goodies
module.exports = app;