// models/User.js
//load modules we need
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//define the schema used by mongoose for user auth
const userSchema = mongoose.Schema({
    
    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});

//add bcrypt methods here
//...