const mysql = require('mysql');
const config = require('../config.js');

// connexion
//const conn = mysql.createConnection(config.db);
// Pool connexion
const conn = mysql.createPool(config.db);

module.exports = conn;