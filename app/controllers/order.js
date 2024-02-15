const { exit } = require("process");
const db = require("../models");
const Order = db.order;
const User = db.user;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.orders || !Array.isArray(req.body.orders) || req.body.orders.length === 0) {
    res.status(400).send({
      message: "Orders array is required and must not be empty!"
    });
    return;
  }

  const orders = req.body.orders.map(orderData => ({
    user_id: orderData.user_id,
    product_id: orderData.product_id,
    qty: orderData.qty,
    total_amount: orderData.total_amount,
  }));

  Order.bulkCreate(orders)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the orders."
      });
    });
};


exports.findByUserId = async (req, res) => {
  const { user_id } = req.params; 
  
 const user = await User.findByPk(user_id, {
    include:[Order]
  })

  // db.order.findAll({
  //   where: { user_id: userId }
  // })
    // .then(user => {
      
      if (user) {
        res.status(200).json({data: user }); // User object with associated orders
      } else {
        res.status(404).send({ message: "User not found" });
      }
    // })
    // .catch(error => {
      // res.status(500).send({ message: error.message || "Some error occurred while retrieving the user and orders." });
    // });
};


exports.findByProductId = (req, res) => {
  const { productId } = req.params; 
  
  db.order.findAll({
    where: { product_id: productId }
  })
    .then(user => {
      
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: "User not found" });
      }
    })
    .catch(error => {
      res.status(500).send({ message: error.message || "Some error occurred while retrieving the user and orders." });
    });
};


exports.findAll = (req, res) => {

  Order.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users."
      });
    });
};

