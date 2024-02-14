const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config.js");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

// app.use(cors(corsOptions));

app.use(cors()); 
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync().then(() => {
  // initial(); // Just use it in development, at the first time execution!. Delete it in production
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this API." });
});

// api routes
require("./app/routes/user")(app);
require("./app/routes/product")(app);
require("./app/routes/order")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

