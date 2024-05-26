// db.js

const mysql = require('mysql2');
const config = require('./dbconfig');

const pool = mysql.createPool(config.mysql);

module.exports = pool.promise();
