const express = require('express');
const app = express();
const categoryRoute = express.Router();
const bodyParser = require("body-parser")
categoryRoute.use(bodyParser.urlencoded({
  extended:true
}));

let category = require('../db/models/category');
// Add category
categoryRoute.route('/category/add-category').post((req, res, next) => {
  post.create(req.body, (error, data) => {
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

// Get category by categoryname
categoryRoute.route('/category/findBycategorysubjectName/:subjectName').get((req, res) => {
  category.find({subjectName:req.params.subjectName},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get category by category id ale autorskie
categoryRoute.route('/category/findBycategoryidThread/:idThread').get((req, res) => {
  category.find({idThread:req.params.idThread},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update category
categoryRoute.route('/category/update-category/:id').put((req, res, next) => {
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
categoryRoute.route('/category/delete-category/:id').delete((req, res, next) => {
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