const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const user_auth_routes = require('./routes/routes');

const app = express();
app.use(cors());

app.get('/api/v1/home', (req, res) =>{
    return res.status(200).send("Welcome to  home page")
})
app.use('/api/v1/user', user_auth_routes)

module.exports = app;