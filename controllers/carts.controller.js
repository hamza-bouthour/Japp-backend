const db = require('../services/db');

/**
 * Fetches data using a GET request from Carts.
 *
 * @param {string} endpoint - The endpoint to fetch data from.
 * @returns {Promise} A promise that resolves with the fetched data, or rejects with an error.
 */
module.exports.selectAllCarts = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM carts ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

/**
 * Inserts data from a JSON object into a database table Carts.
 *
 * Data format exemple
 *{
 * "id_table": 1,
 * "id_product": 1,
 * "name_product": "expresse",
 * "price_product": 2.000
 * } 
 * @param {Object} body - The JSON object containing columns and values to insert.
 * @returns {Promise} A promise that resolves if the insertion is successful, or rejects if there's an error.
 */
module.exports.insertProductToCarts = (body) =>{
    return new Promise((resolve, reject)=>{
        const columns = Object.keys(body).join(', ');
        const values = Object.values(body);
        const placeholders = values.map(() => '?').join(', ');
        console.log(placeholders);
        db.query(`INSERT INTO carts (${columns}) VALUES (${placeholders})`,values,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};



module.exports.insertListProductsToCarts = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM carts ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};