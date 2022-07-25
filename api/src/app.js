const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
var path = require('path');
var fileUpload = require('express-fileupload');

const { morganOption, dbConfig } = require("./config");
const { errorHandler } = require("./middlewares");

var usersRouter = require('./routes/auth');
var adminRouter = require('./routes/product')
var session = require('express-session')

const app = express();

//db connection
dbConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());
app.use(morgan("combined", morganOption));
app.use(fileUpload());
app.use(session({ secret: "key", cookie: { maxAge: 60000000 } }));

// routes
app.use('/', usersRouter);
app.use('/admin', adminRouter);


// custom middleware
app.use(errorHandler);

module.exports = { app };
