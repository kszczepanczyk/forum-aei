const express = require('express');
const app = express();
const userRoute = express.Router();
let user = require('../db/models/user');
// Add user
userRoute.route('/add-user').post((req, res, next) => {
    user.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all user
userRoute.route('/').get((req, res) => {
    user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get user
userRoute.route('/read-user/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
userRoute.route('/update-user/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('user updated successfully!')
    }
  })
})
// Delete user
userRoute.route('/delete-user/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = userRoute;