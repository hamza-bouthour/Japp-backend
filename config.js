require('dotenv').config();
const config = {
    db: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME,
        port     : process.env.DB_PORT,
     //   debug    : true
     /* ,   pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    } */}
};
module.exports = config;