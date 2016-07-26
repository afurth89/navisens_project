var db = require('../models')
var Promise = require('bluebird')

var sampleSeed = {
  deviceId: "sample_device_Id",
  platform: "DESKTOP",
  timestamp: 1469559477,
  motion: 4,
  lat: 37.7749,
  long: -122.4194
}

db.Data.remove({}).then(() => {
  db.Data.create(sampleSeed).then(() => {
    process.exit(0)
  })
})
