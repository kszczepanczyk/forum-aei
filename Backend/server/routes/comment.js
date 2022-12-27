const express = require('express');
const app = express();
const commentRoute = express.Router();
const bodyParser = require("body-parser")
commentRoute.use(bodyParser.urlencoded({
  extended:true
}));

let comment = require('../db/models/comment');
// Add comment
commentRoute.route('/comment/add-comment').post((req, res, next) => {
  post.create(req.body, (error, data) => {
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

// Get comment by comment id ale autorskie
commentRoute.route('/comment/findBycomment/:id').get((req, res) => {
  comment.find({id:req.params.id},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update comment
commentRoute.route('/comment/update-comment/:id').put((req, res, next) => {
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
commentRoute.route('/comment/delete-comment/:id').delete((req, res, next) => {
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