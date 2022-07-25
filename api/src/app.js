const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
var path = require('path');

const { morganOption, dbConfig } = require("./config");
const { errorHandler } = require("./middlewares");

var authRouter = require('./routes/auth');
var productRouter = require('./routes/product')

const app = express();

//db connection
dbConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());
app.use(morgan("combined", morganOption));

// routes
app.use('/', authRouter);
app.use('/admin', productRouter);


// custom middleware
app.use(errorHandler);

module.exports = { app };
