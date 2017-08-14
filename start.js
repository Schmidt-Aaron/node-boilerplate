const mongoose = require('mongoose');

//load environmental variables
require('dotenv').config({ path: 'variables.env' });

//Connect to Database
mongoose.connect(process.env.DATABASE || 'mongodb://localhost:27017/database');
mongoose.Promise = global.Promise; // use E6 promises
mongoose.connection.on('error', (err) => {
    console.log(err.message);
});

//Start the app
const app = require('./app');
app.set('port', process.env.PORT || 3000 ); //sets port to environmental variable or default to 3000
const server = app.listen(app.get('port'), () => {
    console.log(`server running on port ${server.address().port}`);
});