const server = require('./app');
const mongoose = require('mongoose');
const connectDatabase = require('./utils/databaseConnect');

connectDatabase;

const PORT = process.env.PORT || 5000;
server.listen(PORT, (err)=>{
    if(err) console.log(err)
    console.log(`Yep! Server up and running at port ${PORT}...`)
}) 