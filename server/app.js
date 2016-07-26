const express = require("express")
const app = express();

const bodyParser = require('body-parser');
var db = require('./models');
const methodOverride = require('method-override');
const morgan = require('morgan');

const data = require('./routes/data');


module.exports = app;