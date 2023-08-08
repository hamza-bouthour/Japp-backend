const express = require("express");
const cors = require("./cors");


const controller = require('../controllers/products.controller')
const productsRouter = express.Router();
productsRouter // 
  .route('/')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, async  (req, res, next) => {
    try {
      const resultAllproducts = await controller.selectAllProducts();  
      res.status(200).json({elements: resultAllproducts});
    }
    catch (err) {
      console.log(err);
    }
  });
module.exports = productsRouter;
