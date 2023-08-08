const express = require("express");
const cors = require("./cors");


const controller = require('../controllers/carts.controller')
const cartsRouter = express.Router();
cartsRouter // /carts GET (public) returns all carts
  .route('/')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, async  (req, res, next) => {
    try {
      const resultAllCarts = await controller.selectAllCarts();
      res.status(200).json({elements: resultAllCarts});
    }
    catch (err) {
      console.log(err);
    }
  })
 .post(cors.cors, async  (req, res, next) => {
    try {
      const insertProductToCarts = await controller.insertProductToCarts(req.body);
      res.status(200).json({ message: 'product inserted to cart' });
    }
    catch (err) {
      res.status(500).json({ message: 'Internal server error' });
      console.log(err);
    }
  }
);

// .put(
//   cors.corsWithOptions,
//   authenticate.verifyUser,
//   authenticate.verifyAdmin,
//   (req, res) => {

//     try {
//       let deleteP = `INSERT INTO carts (product_id) VALUES (${req.body.product_id})`;
//       db.query(addProductQuery, async () => {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "application/json");
//       res.send({body: "Product added successfully!"})
//       })
//     } catch (err) => {
//       err ? console.log("DB connecxion failed!") :
//       res.send({body: "product_id doesn't exist"})
//     }
//     res.statusCode = 403;
//     res.end("PUT operation not supported on /campsites");
//   }
// )
// .delete(
//   cors.corsWithOptions,
//   authenticate.verifyUser,
//   authenticate.verifyAdmin,
//   (req, res, next) => {
//     Campsite.deleteMany()
//       .then((response) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(response);
//       })
//       .catch((err) => next(err));
//   }
// );

// cartsRouter
//   .route("/:campsiteId")
//   .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
//   .get(cors.cors, (req, res, next) => {
//     console.log(req.params.campsiteId);
//     Campsite.findById(req.params.campsiteId)
//       .populate("comments.author")
//       .then((campsite) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(campsite);
//       })
//       .catch((err) => next(err));
//   })
//   .post(
//     cors.corsWithOptions,
//     authenticate.verifyUser,
//     authenticate.verifyAdmin,
//     (req, res) => {
//       res.statusCode = 403;
//       res.end(
//         `POST operation not supported on /campsites/${req.params.campsiteId}`
//       );
//     }
//   )
//   .put(
//     cors.corsWithOptions,
//     authenticate.verifyUser,
//     authenticate.verifyAdmin,
//     (req, res, next) => {
//       Campsite.findByIdAndUpdate(
//         req.params.campsiteId,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       )
//         .then((campsite) => {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(campsite);
//         })
//         .catch((err) => next(err));
//     }
//   )
//   .delete(
//     cors.corsWithOptions,
//     authenticate.verifyUser,
//     authenticate.verifyAdmin,
//     (req, res, next) => {
//       Campsite.findByIdAndDelete(req.params.campsiteId)
//         .then((response) => {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(response);
//         })
//         .catch((err) => next(err));
//     }
//   );

// cartsRouter
//   .route("/:campsiteId/comments")
//   .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
//   .get(cors.cors, (req, res, next) => {
//     Campsite.findById(req.params.campsiteId)
//       .populate("comments.author")
//       .then((campsite) => {
//         if (campsite) {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(campsite.comments);
//         } else {
//           err = new Error(`Campsite ${req.params.campsiteId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
//     Campsite.findById(req.params.campsiteId)
//       .then((campsite) => {
//         if (campsite) {
//           req.body.author = req.user._id;
//           campsite.comments.push(req.body);
//           campsite
//             .save()
//             .then((campsite) => {
//               res.statusCode = 200;
//               res.setHeader("Content-Type", "application/json");
//               res.json(campsite);
//             })
//             .catch((err) => next(err));
//         } else {
//           err = new Error(`Campsite ${req.params.campsiteId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `PUT operation not supported on /campsites/${req.params.campsiteId}/comments`
//     );
//   })
//   .delete(
//     cors.corsWithOptions,
//     authenticate.verifyUser,
//     authenticate.verifyAdmin,
//     (req, res, next) => {
//       Campsite.findById(req.params.campsiteId)
//         .then((campsite) => {
//           if (campsite) {
//             for (let i = campsite.comments.length - 1; i >= 0; i--) {
//               campsite.comments.id(campsite.comments[i]._id).remove();
//             }
//             campsite
//               .save()
//               .then((campsite) => {
//                 res.statusCode = 200;
//                 res.setHeader("Content-Type", "application/json");
//                 res.json(campsite);
//               })
//               .catch((err) => next(err));
//           } else {
//             err = new Error(`Campsite ${req.params.campsiteId} not found`);
//             err.status = 404;
//             return next(err);
//           }
//         })
//         .catch((err) => next(err));
//     }
//   );

// cartsRouter
//   .route("/:campsiteId/comments/:commentId")
//   .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
//   .get((req, res, next) => {
//     Campsite.findById(req.params.campsiteId)
//       .populate("comments.author")
//       .then((campsite) => {
//         if (campsite && campsite.comments.id(req.params.commentId)) {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "application/json");
//           res.json(campsite.comments.id(req.params.commentId));
//         } else if (!campsite) {
//           err = new Error(`Campsite ${req.params.campsiteId} not found`);
//           err.status = 404;
//           return next(err);
//         } else {
//           err = new Error(`Comment ${req.params.commentId} not found`);
//           err.status = 404;
//           return next(err);
//         }
//       })
//       .catch((err) => next(err));
//   })
//   .post(
//     cors.corsWithOptions,
//     authenticate.verifyUser,
//     authenticate.verifyAdmin,
//     (req, res) => {
//       res.statusCode = 403;
//       res.end(
//         `POST operation not supported on /campsites/${req.params.campsiteId}/comments/${req.params.commentId}`
//       );
//     }
//   )
//   .put(
//     cors.corsWithOptions,
//     authenticate.verifyUser,
//     authenticate.verifyAdmin,
//     (req, res, next) => {
//       Campsite.findById(req.params.campsiteId)
//         .then((campsite) => {
//           if (
//             req.user._id.equals(
//               campsite.comments.id(req.params.commentId).author._id
//             )
//           ) {
//             if (campsite && campsite.comments.id(req.params.commentId)) {
//               if (req.body.rating) {
//                 campsite.comments.id(req.params.commentId).rating =
//                   req.body.rating;
//               }
//               if (req.body.text) {
//                 campsite.comments.id(req.params.commentId).text = req.body.text;
//               }
//               campsite
//                 .save()
//                 .then((campsite) => {
//                   res.statusCode = 200;
//                   res.setHeader("Content-Type", "application/json");
//                   res.json(campsite);
//                 })
//                 .catch((err) => next(err));
//             } else if (!campsite) {
//               err = new Error(`Campsite ${req.params.campsiteId} not found`);
//               err.status = 404;
//               return next(err);
//             } else {
//               err = new Error(`Comment ${req.params.commentId} not found`);
//               err.status = 404;
//               return next(err);
//             }
//           } else {
//             res.statusCode = 403;
//             res.send("Unauthorized Author");
//           }
//         })
//         .catch((err) => next(err));
//     }
//   )
//   .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
//     console.log(req);
//     Campsite.findById(req.params.campsiteId)
//       .then((campsite) => {
//         if (
//           req.user._id.equals(
//             campsite.comments.id(req.params.commentId).author._id
//           )
//         ) {
//           if (campsite && campsite.comments.id(req.params.commentId)) {
//             campsite.comments.id(req.params.commentId).remove();
//             campsite
//               .save()
//               .then((campsite) => {
//                 res.statusCode = 200;
//                 res.setHeader("Content-Type", "application/json");
//                 res.json(campsite);
//               })
//               .catch((err) => next(err));
//           } else if (!campsite) {
//             err = new Error(`Campsite ${req.params.campsiteId} not found`);
//             err.status = 404;
//             return next(err);
//           } else {
//             err = new Error(`Comment ${req.params.commentId} not found`);
//             err.status = 404;
//             return next(err);
//           }
//         } else {
//           res.statusCode = 403;
//           res.send("Unauthorized Author");
//         }
//       })
//       .catch((err) => next(err));
//   });
module.exports = cartsRouter;
