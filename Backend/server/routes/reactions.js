const express = require('express');
const app = express();
const cors = require('cors');
const reactionRoute = express.Router();
const bodyParser = require("body-parser")
reactionRoute.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cors());
let reaction = require('../db/models/reaction');
// Add reaction
reactionRoute.route('/reaction/add-reaction').post((req, res, next) => {
  reaction.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all reaction
reactionRoute.route('/reaction').get((req, res) => {
    reaction.find({},{_id:0,type:1,post_id:1},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get reaction by reactionname
reactionRoute.route('/reaction/findByreactiontype/:type,:post_id').post((req, res) => {
  reaction.find({type:req.params.type,post_id:req.params.post_id},{_id:0,user_id:1},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get reaction for post
reactionRoute.route('/reaction/findByreactionid/:id').post((req, res) => {
  reaction.find({post_id:req.params.id},{_id:0,type:1},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update reaction
reactionRoute.route('/reaction/update-reaction/:id').put((req, res, next) => {
    reaction.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('reaction updated successfully!')
    }
  })
})
// Delete reaction
reactionRoute.route('/reaction/delete-reaction/:id').delete((req, res, next) => {
    reaction.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = reactionRoute;