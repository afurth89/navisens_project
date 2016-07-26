var Promise = require("bluebird");
var mongoose = Promise.promisifyAll(require("mongoose"));

mongoose.connect("mongodb://localhost/navisens")
mongoose.set("debug", true);

// module.exports.MODEL_NAME = require("./model_name")
module.exports.Data = require("./data")