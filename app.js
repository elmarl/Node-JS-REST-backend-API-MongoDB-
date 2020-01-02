const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
const path = require('path');
const pug = require('pug');
//call bodyparser and other settings before setting routes

//app.use(cors());
require('dotenv/config');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//Import routes
const postsRoute = require('./routes/routes');

//middleware, load after bodyparser. 
//Every time a specified request is made the respective middleware is called
app.use(bodyParser.json());
app.use('/', postsRoute);
//Place local static css files in public folder and make it accessible
app.use('/static',express.static('public'));

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB")
    })
//Listen to the server
app.listen(3030);