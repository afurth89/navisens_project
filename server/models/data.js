var Promise = require("bluebird");
var mongoose = Promise.promisifyAll(require("mongoose"));
var Schema = mongoose.Schema

var dataSchema = new Schema({
  deviceId: String,
  platform: String,
  timestamp: Number,
  motion: Number,
  lat: Number,
  long: Number

})

var Data = mongoose.model("Data", dataSchema)

module.exports = Data;