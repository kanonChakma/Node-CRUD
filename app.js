
const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const db= require('./db/db')

//router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const shopRouter = require('./routes/shops');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops',shopRouter);

module.exports = app;
