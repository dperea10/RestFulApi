const express  = require('express');
const db = require('./src/conection_db/conect_db');
db();
const app = express();
const port = process.env.PORT || 3000;


    const server = app.listen(port, () => 
    console.info(`Server is runnig on ${port}`));
    

module.exports = server;