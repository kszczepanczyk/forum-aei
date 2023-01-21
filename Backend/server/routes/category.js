const express = require('express');
const app = express();
const cors = require('cors');
const categoryRoute = express.Router();
const bodyParser = require("body-parser")
categoryRoute.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cors());
let category = require('../db/models/category');
let user=require('../db/models/user')
// Add category
categoryRoute.route('/category/add-category').post((req, res, next) => {
 
  user.findOne({username:req.body.username},{_id:0,idUser:1},(error,userek)=>
  {
    if (error) {
      return next(error)
    } 
    if(!userek)
    {
      res.status(404).json({ message: 'nie ma usera takiego' });
    }
    else{
      const id=userek.idUser
      category.create({idThread:generateRandomNumber(1,1000000000),subjectName:req.body.subjectName,user_id:id}, (error, cat) => {
        if (error) {
          return next(error)
        } else {
          res.json(cat)
        }
      })

    }

  }
  )
 
  
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Get all category
categoryRoute.route('/category').get((req, res) => {
  category.find({}, {subjectName: 1, _id:0}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get category by categoryname
categoryRoute.route('/category/findBycategorysubjectName').post((req, res) => {
  category.find({subjectName:req.body.subjectName},{_id:0,subjectName:1,date_created:1,user_id:1},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get category by category id ale autorskie
categoryRoute.route('/category/findBycategoryidThread').post((req, res) => {
  category.find({idThread:req.body.idThread},{_id:0,subjectName:1,date_created:1},(error, data) => {
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