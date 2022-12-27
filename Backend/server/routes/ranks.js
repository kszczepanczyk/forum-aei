const express = require('express');
const app = express();
const rankRoute = express.Router();
const bodyParser = require("body-parser")
rankRoute.use(bodyParser.urlencoded({
  extended:true
}));

let rank = require('../db/models/rank');
// Add rank
rankRoute.route('/rank/add-rank').post((req, res, next) => {
  post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all rank
rankRoute.route('/rank').get((req, res) => {
    rank.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get rank by rank id ale autorskie
rankRoute.route('/rank/findByrankid/:id').get((req, res) => {
  rank.find({id:req.params.id},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update rank
rankRoute.route('/rank/update-rank/:id').put((req, res, next) => {
    rank.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('rank updated successfully!')
    }
  })
})
// Delete rank
rankRoute.route('/rank/delete-rank/:id').delete((req, res, next) => {
    rank.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = rankRoute;