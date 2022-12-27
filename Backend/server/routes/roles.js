const express = require('express');
const app = express();
const roleRoute = express.Router();
const bodyParser = require("body-parser")
roleRoute.use(bodyParser.urlencoded({
  extended:true
}));

let role = require('../db/models/role');
// Add role
roleRoute.route('/role/add-role').post((req, res, next) => {
  post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all role
roleRoute.route('/role').get((req, res) => {
    role.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get role by rolename
roleRoute.route('/role/findByrole/:roleName').get((req, res) => {
  role.find({roleName:req.params.roleName},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


// Update role
roleRoute.route('/role/update-role/:id').put((req, res, next) => {
    role.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('role updated successfully!')
    }
  })
})
// Delete role
roleRoute.route('/role/delete-role/:id').delete((req, res, next) => {
    role.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = roleRoute;