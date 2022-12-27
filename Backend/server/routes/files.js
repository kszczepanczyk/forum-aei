const express = require('express');
const app = express();
const fileRoute = express.Router();
const bodyParser = require("body-parser")
fileRoute.use(bodyParser.urlencoded({
  extended:true
}));

let file = require('../db/models/file');
// Add file
fileRoute.route('/file/add-file').post((req, res, next) => {
  post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all file
fileRoute.route('/file').get((req, res) => {
    file.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get file by filename
fileRoute.route('/file/findByfilename/:name').get((req, res) => {
  file.find({name:req.params.name},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get file by file id ale autorskie
fileRoute.route('/file/findByfile/:id').get((req, res) => {
  file.find({id:req.params.id},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

// Update file
fileRoute.route('/file/update-file/:id').put((req, res, next) => {
    file.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('file updated successfully!')
    }
  })
})
// Delete file
fileRoute.route('/file/delete-file/:id').delete((req, res, next) => {
    file.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = fileRoute;