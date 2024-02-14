
module.exports = app => {
    const productController = require("../controllers/product.js");
  
    const router = require("express").Router();
  
    router.post("/add", productController.create);
  
    router.get("/", productController.findAll);
  
    app.use("/api/product", router);
  };