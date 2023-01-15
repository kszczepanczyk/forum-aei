const express = require('express');
const app = express();
const cors = require('cors');
const postRoute = express.Router();
const bodyParser = require("body-parser")
postRoute.use(bodyParser.urlencoded({
  extended:true
}));

//postRoute.use(jsonParser);

var jsonParser = bodyParser.json();
app.use(cors());
let post = require('../db/models/post');
let user=require('../db/models/user')
let category=require('../db/models/category')
// Add post
postRoute.route('/post/add-post').post((req, res, next) => {
  let id
  user.findOne({username:req.body.username},{_id:0,idUser:1},(error, data)=> {
    if (error) {
      return next(error)
    } 
    if(!data)
    {
      res.status(404).json({ message: 'nie ma usera takiego' });
    }
    else {
       id=data.idUser

       category.findOne({subjectName:req.body.subjectName},{_id:0,idThread:1},(err,kategoria)=>
       {
        if(err)
        {
          return next(error)
        }
        if(!kategoria)
        {
          res.status(404).json({ message: 'nie ma takiej kategorii' });
        }
        else{
          const idCategory=kategoria.idThread
          post.create({idPost:generateRandomNumber(1,10000000000000),user_id:id,thread_id:idCategory,title:req.body.title,content:req.body.content} ,(error, poscik) => {
            if (error) {
              return next(error)
            } else {
              res.json(poscik)
            }
          })

        }
       })



    }
  })

  
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Get all post
postRoute.route('/post').get((req, res) => {
    post.find({},{_id:0,idPost:1,title:1,content:1,date_created:1,subjectName:1},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get post from user
postRoute.route('/post/findByUser').post((req, res) => {

  const name=req.body.username

  user.findOne({username:name},{_id:0,idUser:1},(error,userek)=>
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
      post.find({user_id:id},{_id:0,thread_id:1,title:1,content:1,date_created:1},(error, data) => {
        if (error) {
          return next(error)
        } else {
           res.json(data)
        }
      })
    }
  })
 
})






// Update post
postRoute.route('/post/update-post/:id').put((req, res, next) => {
    post.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('post updated successfully!')
    }
  })
})
// Delete post
postRoute.route('/post/delete-post/:id').delete((req, res, next) => {
    post.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = postRoute;