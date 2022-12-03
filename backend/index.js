const express = require('express');
const mongoose = require('mongoose');
require('./db/mongoose');

const UserModel = require('./db/models/user');

// instantiate express
const app = express();

// For Build
app.use(express.static('dist'));

// Import Routes
// const route = require('./routes/route');

// app.use(route);

const routeUser = require('./routes/user');
const routePost = require('./routes/post');
const routeComment = require('./routes/comment');
const routeCategory = require('./routes/category');

app.use(routeUser);
app.use(routePost);
app.use(routeComment);
app.use(routeCategory);
// const userRoute = require('./routes/user');
// const postRoute = require('./routes/posts');
// const forumRoute = require('./routes/forums');
// const replyRoute = require('./routes/replies');
// const authRoute = require('./routes/auth');
// const playgroundRoute = require('./routes/playground');

// Route middlewares
// app.use('/api/user', userRoute);
// app.use('/api/posts', postRoute);
// app.use('/api/forums', forumRoute);
// app.use('/api/replies', replyRoute);
// app.use('/api/auth', authRoute);
// app.use('/api/playground', playgroundRoute);

// Connect to DB
// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useCreateIndex: true }, () => console.log('connected DB'));
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));




const userData = {
    idUser: 3,
      username: 'hii',
      email: 'hia@user.com',
      password: 'haslo',
      rankId: 'admin'
}

// user.delete().then(() =>{console.log(user)}).catch(error =>{console.log(error)});
// user.save().then(() =>{console.log(user)}).catch(error =>{console.log(error)});

const createeuser = async(data) =>{
    try{
        const user = new UserModel(data);
        await user.save()
        console.log(user)
    }catch(error){
        console.log(error)
    }
}
// createeuser(userData);

const findUsers = async(name, pas) =>{
    try{
        const users = await UserModel.find({username: name, password: pas})
         console.log(users)
    }catch(error){
        console.log(error)
    }
}
// findUsers('hi','haslo')


// const znaleziony = UserModel.find({username: 'hi', password: 'haslo'}).then(users=>{
//     return 'a'
// })
// console.log(UserModel.find({password:'haslo'})[0].username);

const deleteOnedUser = async(id)=>{
    try{
        const users = await UserModel.deleteOne({idUser: id})
        console.log(users)
    }catch(error){
        console.log(error)
    }
}
// deleteOnedUser(2)