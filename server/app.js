const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const user_auth_routes = require('./routes/routes');
const cors = require('cors');
const errorMiddleware = require('./middleware/error');

dotenv.config({path: './config.env'});

app.use(cors({credentials: true, origin:`http://localhost:3000`}));
app.use(express.json())
app.use(cookieParser());


app.get('/api/v1/home', (req, res) =>{
    return res.status(200).send("Welcome to  home page")
})
app.use('/api/v1/user', user_auth_routes)

// Middleware for error
app.use(errorMiddleware)

module.exports = app;