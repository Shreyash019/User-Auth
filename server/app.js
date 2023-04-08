const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const user_auth_routes = require('./routes/routes');
const app = express();

dotenv.config({path: './config.env'});
app.use(express.json())
app.use(cors({credentials: true, origin:`http://localhost:3000`}));
app.use(cookieParser());



app.get('/api/v1/home', (req, res) =>{
    return res.status(200).send("Welcome to  home page")
})
app.use('/api/v1/user', user_auth_routes)

module.exports = app;