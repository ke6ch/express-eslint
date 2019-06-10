const createError = require("http-errors");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
const logger = require("./config/logger");

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

// setup mongoose connection
const mongoDB = process.env.MONGOOSE_CONNECTION;

mongoose
  .connect(mongoDB, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connection succesful"))
  .catch(err => console.error(err));
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger.express);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1", apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
