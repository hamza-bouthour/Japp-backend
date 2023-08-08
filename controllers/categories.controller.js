const db = require('../services/db');
module.exports.selectAllCategories = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM categories ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
module.exports.selectAllCategorieFromProducts = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT DISTINCT category FROM products WHERE category IS NOT NULL UNION SELECT name_category FROM categories ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
module.exports.selectNonRegestredCategorie = () =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT DISTINCT P.category FROM products P LEFT JOIN categories C ON P.category=C.name_category WHERE C.name_category IS NULL; ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};