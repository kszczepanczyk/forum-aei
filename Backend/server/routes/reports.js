const express = require('express');
const app = express();
const reportRoute = express.Router();
const bodyParser = require("body-parser")
reportRoute.use(bodyParser.urlencoded({
  extended:true
}));

let report = require('../db/models/report');
// Add report
reportRoute.route('/report/add-report').post((req, res, next) => {
  post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all report
reportRoute.route('/report').get((req, res) => {
    report.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get report by type
reportRoute.route('/report/findByreporttype/:type').get((req, res) => {
  report.find({type:req.params.type},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get report by report id ale autorskie
reportRoute.route('/report/findByreportid/:id').get((req, res) => {
  report.find({id:req.params.id},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update report
reportRoute.route('/report/update-report/:id').put((req, res, next) => {
    report.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('report updated successfully!')
    }
  })
})
// Delete report
reportRoute.route('/report/delete-report/:id').delete((req, res, next) => {
    report.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = reportRoute;