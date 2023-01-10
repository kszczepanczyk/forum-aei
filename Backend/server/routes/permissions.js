const express = require('express');
const app = express();
const cors = require('cors');
const permissionRoute = express.Router();
const bodyParser = require("body-parser")
permissionRoute.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cors());
let permission = require('../db/models/permission');
// Add permission
permissionRoute.route('/permission/add-permission').post((req, res, next) => {
  permission.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all permission
permissionRoute.route('/permission').get((req, res) => {
    permission.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get permission by permission id
permissionRoute.route('/permission/findBypermission/:id').get((req, res) => {
  permission.find({id:req.params.id},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get permission by permission type
permissionRoute.route('/permission/findBypermissiontype/:type').get((req, res) => {
  permission.find({type:req.params.type},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update permission
permissionRoute.route('/permission/update-permission/:id').put((req, res, next) => {
    permission.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('permission updated successfully!')
    }
  })
})
// Delete permission
permissionRoute.route('/permission/delete-permission/:id').delete((req, res, next) => {
    permission.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = permissionRoute;