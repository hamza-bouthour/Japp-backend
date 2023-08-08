const db = require('../services/db');
module.exports.selectAllProducts = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM products ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};