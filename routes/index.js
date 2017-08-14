//set up your routes here!!
const express = require('express');
const router = express.Router();

//all the routes
router.get('/', (req, res) => {
    res.send('it is working');
});

router.get('/login', (res, req) => {
    res.send('welcome to the login page');
});

module.exports = router;