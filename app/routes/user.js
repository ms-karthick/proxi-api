
module.exports = app => {
    const userController = require("../controllers/user.js");
  
    const router = require("express").Router();
  
    router.post("/add",userController.create);
  
    router.get("/", userController.findAll);
    
    app.use("/api/user", router);
  };