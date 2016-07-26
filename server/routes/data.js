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

module.exports = router;