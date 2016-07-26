var express = require('express')
    router = express.Router(),
    db = require('../models'),
    Promise = require("bluebird");

router.route('/')
  .get((req, res) => {
    db.Data.find({})
      .exec((err, data) => {
        if (err) throw err;
        console.log("Returned data: ", data)
        res.send(data)
      }) 
  })

router.route('/:id')
  .get((req, res) => {
    console.log("Device Id to find is: ", req.params.id)
    db.Data.find({'deviceId': req.params.id})
      .exec((err, deviceData) => {
        if (err) throw err;
        console.log("Device data: ", deviceData)
        res.send(deviceData)
      })
  })

module.exports = router;