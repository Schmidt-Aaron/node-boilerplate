//set up your routes here!!
const express = require('express');
const router = express.Router();

//all the routes
router.get('/', (req, res) => {
    res.send('it is working');
});

module.exports = router;