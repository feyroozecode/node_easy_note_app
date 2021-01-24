// import required module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// local module
const dbConfig = require('./config/database.config.js')

// var
const PORT = 3043;

// create express app
const app = express();

// parse request of cotent-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded( {extended: true} ))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Easy Note"});
})

// prepare mongo database
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
},
 (err)  =>  {
    if(err)
        console.log('err');
    else
        console.log('Successfully connected to the database')
 });

// require the note app routes for the rest api
require('./app/routes/note.routes.js')(app);
// listen for requests
app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})