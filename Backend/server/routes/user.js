const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = express.Router();
const bodyParser = require("body-parser")
userRoute.use(bodyParser.urlencoded({
  extended:true
}));
userRoute.use(express.json());


app.use(cors());

let user = require('../db/models/user');
// Add user
// userRoute.route('/add-user').post((req, res,next) => {
//   user.create({idUser:req.body.idUser,email:req.body.email,username:req.body.username,rank:req.body.rank,password:req.body.password}, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(req.body)
     
//     }
//   })
// });


userRoute.route('/add-user').post((req, res,next) => {
  user.create({idUser:generateRandomNumber(1,100000000000000),email:req.body.email,username:req.body.username,rank:req.body.rank,password:req.body.password}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(req.body)
     
    }
  })
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// userRoute.route('/add-user').post((req, res,next) => {
//   user.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(req.body)
     
//     }
//   })
// });

// Get all user
userRoute.route('/user').get((req, res) => {
    user.find({},{_id:0,password:0,idUser:0,__v:0},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // Get user by email
// userRoute.route('/findEmail/:email').post((req, res) => {
//   user.find({email:req.params.email},{_id:0,password:0,idUser:0},(error, data) => {
//   if (error) {
//     return next(error)
//   } else {
//     res.json(data)
//   }
// })
// })

userRoute.route('/findEmail').post((req, res) => {
    const email = req.body.email;
    user.find({email: email},{_id:0,password:0,idUser:0,__v:0}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    });
  });

// //get
// userRoute.route('/findPassword/:email,:password').post((req, res) => {
//   user.findOne({email: req.params.email, password: req.params.password},{_id:0,password:0,idUser:0},(error, data) => {
//     if (error) {
//       return res.status(404).send(error)
//     } else if(!data){
//         res.sendStatus(404)
//     }else{res.status(200).json(data)}
//   })

  
// })

// //post from email i password
// userRoute.route('/findLogin/:email,:password').post((req, res) => {
//   user.findOne({email: req.params.email, password: req.params.password},{_id:0,password: 0,idUser:0},(error, data) => {
//     if (error) {
//       return res.status(404).send(error)
//     } else if(!data){
//         res.sendStatus(404)
//     }else{res.status(200).json(data)}
//   })
// })

userRoute.route('/Login').post((req, res) => {
  user.findOne({email: req.body.email, password: req.body.password},{_id:0,password: 0,idUser:0,__v:0},(error, data) => {
    if (error) {
      return res.status(404).send(error)
    } else if(!data){
        res.sendStatus(404)
    }else{res.status(200).json(data)}
  })
})













// Get user by username
userRoute.route('/findByUser').post((req, res) => {
  const name=req.body.username
  user.find({username:name},{_id:0,password:0,__v:0},(error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Get user by user id ale autorskie
userRoute.route('/findByUserId').post((req, res) => {
  const id=req.body.idUser
  user.find({idUser:id},{_id:0,password:0,idUser:0,__v:0},(error, data) => {
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