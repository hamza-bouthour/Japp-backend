const express = require("express");
const cors = require("./cors");


const controller = require('../controllers/categories.controller')
const categoriesRouter = express.Router();
categoriesRouter // 
  .route('/')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, async  (req, res, next) => {
    try {
      const resultAllproducts = await controller.selectAllCategories();  
      res.status(200).json({elements: resultAllproducts});
    }
    catch (err) {
      console.log(err);
    }
  });
categoriesRouter
  .route('/non-regestred')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, async  (req, res, next) => {
    try {
      const NonRegestredCategorie = await controller.selectNonRegestredCategorie();  
      res.status(200).json({elements: NonRegestredCategorie});
    }
    catch (err) {
      console.log(err);
    }
  });
module.exports = categoriesRouter;
