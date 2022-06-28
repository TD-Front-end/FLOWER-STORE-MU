'use strict'
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flowerstore_mu'
  });

module.exports = conn;