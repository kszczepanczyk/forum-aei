const express = require('express');
const app = express();
const commentRoute = express.Router();
const cors = require('cors');
const bodyParser = require("body-parser")
commentRoute.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cors());
let comment = require('../db/models/comment');
// Add comment
commentRoute.route('/comment/add-comment').post((req, res, next) => {
  comment.create({id:generateRandomNumber(1,10000000000000),post_id:req.body.idPost,content:req.body.content,username:req.body.username}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      comment.find({id:data.id},{__v:0,post_id:0,_id:0},(err,com)=>{

        res.json(com)
      })
      
    }
  })
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Get all comment
commentRoute.route('/comment').get((req, res) => {
    comment.find({},{_id:0,content:1,date_created:1,username:1,id:1},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get comment for post
commentRoute.route('/comment/findByPostID').post((req, res) => {
  comment.find({post_id:req.body.idPost},{_id:0,content:1,date_created:1,username:1,id:1},(error, data) => {
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