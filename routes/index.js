var express = require("express");
var router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql.freedb.tech",
  port: 3306,
  database: "freedb_hbxTesting",
  user: "freedb_hbxTester",
  password: "&FD!7UQTJvj4yps",
});

/* GET home page. */
router.get("/", function (req, res, next) {
  try {
    db.query("SELECT * FROM hbx_programs LIMIT 1", (err, result) => {
      err ? console.log(err) : res.send(result);
    });
  } catch (err) {
    console.log("DB connexion failed!");
  }
});

module.exports = router;
