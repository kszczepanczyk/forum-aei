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

       category.findOne({subjectName:req.body.subjectname},{_id:0,idThread:1},(err,kategoria)=>
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
          post.create({idPost:generateRandomNumber(1,10000000000000),username:req.body.username,thread_id:idCategory,title:req.body.title,content:req.body.content,subjectname:req.body.subjectname},(error, poscik) => {
            if (error) {
              return next(error)
            } else {
             
              post.find({idPost:poscik.idPost},{_id:0,thread_id:0,__v:0},(error,p)=>{
                if(error)
                {
                  return next(error);
                }else{


                  res.json(p);  
                }
              })
              
                
            
              
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
    post.find({},{_id:0,thread_id:0,__v:0},(error, data) => {
    if (error) {
      return next(error)
    } else {
      
     
      res.json(data);
    }
  })
})

// postRoute.route('/post').get(async (req, res) => {
//   try {
//     const data = await post.find({});
//     let jsonArr = [];
//     for (const obj in data) {
//       const kategoria = await category.findOne({idThread: data[obj].thread_id});
//       const nazwa = kategoria.nazwa;

//       const newPost = {
//         title: data[obj].title,
//         content: data[obj].content,
//         date_created: data[obj].date_created,
//         _id: data[obj]._id,
//         idPost: data[obj].idPost,
//         subjectName: nazwa
//       };
//       jsonArr.push(newPost);
//     }
//     res.json(jsonArr);
//   } catch (error) {
//     return next(error);
//   }
// });

// Get post from user
postRoute.route('/post/findByUser').post((req, res) => {

  const name=req.body.username

  post.find({username:req.body.username},{_id:0,thread_id:0,__v:0},(error, data) => {
    if (error) {
      return next(error)
    } else {
     

       res.json(data)
    }
  })

  // user.findOne({username:name},{_id:0,idUser:1},(error,userek)=>
  // {
  //   if (error) {
  //     return next(error)
  //   } 
  //   if(!userek)
  //   {
  //     res.status(404).json({ message: 'nie ma usera takiego' });
  //   }

  //   else{
  //     const id=userek.idUser
  //     post.find({username:req.body.username},{_id:0,idPost:1,title:1,content:1,date_created:1,__v:0,subjectname:1},(error, data) => {
  //       if (error) {
  //         return next(error)
  //       } else {
         

  //          res.json(data)
  //       }
  //     })
  //   }
  // })
 
})






// Update post
postRoute.route('/post/update-post').put((req, res, next) => {

  post.find({idPost:req.body.idPost},{},(error,d)=>{
    if(error)
    {
      return next(error);
    }else{

      post.findByIdAndUpdate(d._id, {
        username:req.body.username,title:req.body.title
      }, (error, data) => {
        if (error) {
          return next(error);
          console.log(error)
        } else {
          res.json(data)
          console.log('post updated successfully!')
        }
      })

    }

  })
   
})
// Delete post
postRoute.route('/post/delete-post').delete((req, res, next) => {

  post.find({idPost:req.body.idPost},{_id:1},(error,d)=>{
    if(error)
    {
      return next(error);
    }else{

     
    post.findByIdAndRemove(d._id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}
  })
})
module.exports = postRoute;