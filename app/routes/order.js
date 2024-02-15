
module.exports = app => {
    const orderController = require("../controllers/order.js");
  
    const router = require("express").Router();
  
    router.post("/add", orderController.create);
  
    router.get("/", orderController.findAll);
  
    router.get("/find-data-by-user/:user_id", orderController.findByUserId);

    router.get("/find-data-by-product/:productId", orderController.findByProductId);
    
    app.use("/api/order", router);
  };