const express = require('express');
const app = express();
const postRoute = express.Router();
const bodyParser = require("body-parser")
postRoute.use(bodyParser.urlencoded({
  extended:true
}));

let post = require('../db/models/post');
// Add post
postRoute.route('/post/add-post').post((req, res, next) => {
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

// Get post by post id ale autorskie
postRoute.route('/post/findBypost/:idPost').get((req, res) => {
  post.find({idPost:req.params.idPost},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update post
postRoute.route('/post/update-post/:id').put((req, res, next) => {
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
postRoute.route('/post/delete-post/:id').delete((req, res, next) => {
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