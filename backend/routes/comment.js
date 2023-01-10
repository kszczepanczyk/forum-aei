const express = require('express');
const app = express();
const commentRoute = express.Router();
let comment = require('../db/models/comment');
// Add comment
commentRoute.route('/add-comment').post((req, res, next) => {
    comment.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all comment
commentRoute.route('/comment').get((req, res) => {
    comment.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get comment
commentRoute.route('/read-comment/:id').get((req, res) => {
    comment.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update comment
commentRoute.route('/update-comment/:id').put((req, res, next) => {
    comment.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('comment updated successfully!')
    }
  })
})
// Delete comment
commentRoute.route('/delete-comment/:id').delete((req, res, next) => {
    comment.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = commentRoute;