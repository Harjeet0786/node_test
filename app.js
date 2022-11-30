const express = require("express"),
  path = require("path"),
  morgan = require("morgan"),
  mysql = require("mysql"),
  myConnection = require("express-myconnection");
require("dotenv").config();

const app = express();

// importing routes
const customerRoutes = require("./src/routes/customer");
const port = process.env.PORT || 3000;
// settings
//app.set('port', process.env.PORT || 4000);
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "12345678",
      port: 3306,
      database: "testdb",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", customerRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
app.listen(9000, function () {
  console.log("server started on port 9000...");
});
