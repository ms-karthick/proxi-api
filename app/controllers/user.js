const { exit } = require("process");
const db = require("../models");
const User = db.user;
const Op = db.Op;


exports.create =  (req, res) => {
// console.log(req)
    // Validate request
    if (!req.body.name || !req.body.mobile_no || !req.body.email) {
      res.status(400).send({
        message: "All field is required!"
      });
      return;
    }

    const users = {
      name: req.body.name,
      mobile_no: req.body.mobile_no,
      email: req.body.email,
    };

    User.create(users)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the User."
        });
      });
  };
  

  exports.findAll = (req, res) => {

      User.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users."
          });
        });
  };

