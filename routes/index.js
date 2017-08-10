//set up your routes here!!
const express = require('express');
const router = express.Router();

//all the routes
router.get('/', (res, req) => {
    res.session('it is working');
});

module.exports = router;