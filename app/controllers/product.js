const { exit } = require("process");
const db = require("../models");
const Product = db.product;


exports.create =  (req, res) => {
// console.log(req)
    // Validate request
    if (!req.body.name || !req.body.user_id || !req.body.price) {
      res.status(400).send({
        message: "All field is required!"
      });
      return;
    }

    const product = {
      name: req.body.name,
      user_id: req.body.user_id,
      price: req.body.price,
    };

    // Save product in database
    Product.create(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Product."
        });
      });
  };
  

  exports.findAll = (req, res) => {

    Product.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Users."
        });
      });
};


