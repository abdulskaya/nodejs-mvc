const express = require('express');
const app = express();
const connection = require('./config/db');
const env = require('dotenv').config();

// Set template engine
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/routes'));

const PORT = process.env.SERVER_PORT || 4111;
app.listen(PORT, console.log("Server has started at port " + PORT))