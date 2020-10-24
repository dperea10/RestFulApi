require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');


//custom console
const connected   = chalk.bold.cyan;
const error       = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () =>{

    mongoose.connect(process.env.CONECTION_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then (()  => console.info(connected('Mongo connected')))
    .catch(err => console.info(error(`Failed ${err}`)))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.info('Mongo disconnected');
            process.exit(0);
        });
    });

}


