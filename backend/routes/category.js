const express = require('express');
const app = express();
const categoryRoute = express.Router();
let category = require('../db/models/category');
// Add category
categoryRoute.route('/add-category').post((req, res, next) => {
    category.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all category
categoryRoute.route('/category').get((req, res) => {
    category.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get category
categoryRoute.route('/read-category/:id').get((req, res) => {
    category.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update category
categoryRoute.route('/update-category/:id').put((req, res, next) => {
    category.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('category updated successfully!')
    }
  })
})
// Delete category
categoryRoute.route('/delete-category/:id').delete((req, res, next) => {
    category.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = categoryRoute;