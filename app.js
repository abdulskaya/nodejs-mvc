const express = require('express');
const app = express();
const connection = require('./src/config/db');
const env = require('dotenv').config();

// Set template engine
app.set('view engine', 'ejs');

app.use(express.static('public')); 

// Routes
app.use('/', require('./src/routes/routes'));

const PORT = process.env.SERVER_PORT || 4111;
app.listen(PORT, console.log("Server has started at port " + PORT))