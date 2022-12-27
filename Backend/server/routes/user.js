const express = require('express');
const app = express();
const userRoute = express.Router();
const bodyParser = require("body-parser")
userRoute.use(bodyParser.urlencoded({
  extended:true
}));

let user = require('../db/models/user');
// Add user
userRoute.route('/add-user').post((req, res, next) => {
  post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all user
userRoute.route('/user').get((req, res) => {
    user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get user by email
userRoute.route('/findByemail/:email').get((req, res) => {
  user.find({email:req.params.email},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get user by username
userRoute.route('/findByUser/:username').get((req, res) => {
  user.find({username:req.params.username},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get user by user id ale autorskie
userRoute.route('/findByUserId/:idUser').get((req, res) => {
  user.find({idUser:req.params.idUser},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get user
// userRoute.route('/read-user/:id').get((req, res) => {
//     user.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

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