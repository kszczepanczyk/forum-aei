const express = require('express');
const app = express();
const postRoute = express.Router();
let post = require('../db/models/post');
// Add post
postRoute.route('/add-post').post((req, res, next) => {
    post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all post
postRoute.route('/post').get((req, res) => {
    post.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get post
postRoute.route('/read-post/:id').get((req, res) => {
    post.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update post
postRoute.route('/update-post/:id').put((req, res, next) => {
    post.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('post updated successfully!')
    }
  })
})
// Delete post
postRoute.route('/delete-post/:id').delete((req, res, next) => {
    post.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = postRoute;