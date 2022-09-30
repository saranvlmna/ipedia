const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
var path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { morganOption, dbConfig } = require("./config");
const { errorHandler } = require("./middlewares");
const { authRouter, productRouter, cartRouter } = require("./routes");

const app = express();

//db connection
dbConfig();

app.use(
  session({
    name: "vLmNa_session",
    secret: "saranvlmna",
    resave: false,
    saveUninitialized: false
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use(helmet());
app.use(morgan("combined", morganOption));
app.use(cookieParser());

// routes
app.use("/api/", productRouter);
app.use("/api/auth", authRouter);
app.use("/api/cart", cartRouter);

// custom middleware
app.use(errorHandler);

module.exports = { app };
