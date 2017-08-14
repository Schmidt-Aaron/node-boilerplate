//load common packages
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
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

//middleware goes here...
//read cookies for auth
app.use(cookieParser()); 

//parse incoming req.body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up passport
app.use(session({
    secret: 'foo',  //change this in deployment
    store: new MongoStore(options)
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//set routes
app.use('/', routes);

//add errorHandling
//..

//export all of the goodies
module.exports = app;