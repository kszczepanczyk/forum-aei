// wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route.
router.get("/serverReadme", function (req, res) {
  let html = `
  <html>
  <style>
    div{
      display: flex;
      flex-flow: column;
      place-items: center;
      margin: 25px 0 50px 50px;}
      p{font-size: 18px;}
  </style>
  <div>
  <h1>Mini instrukcja api</h1>
  <p>Url z samą nazwą typu &quot;/post&quot; pobiera wszystkie dane z danej struktury</p>
  <p>Nazwa w url &quot;:cos&quot; jest to parametr i wpisujemy w miejsce parametru jakiś poszukiwany tekst np chcemy id usera to używamy to w taki spos&oacute;b &quot;/findByUserId/1234&quot; dla name /findByUser/Cloons wielkość liter ma znaczenie</p>
  <p>Operacje update and delete operują na automatycznym _id z mongoDB, kt&oacute;re jest innym id niż autorskie id, kt&oacute;re znamy z sql i rozr&oacute;żniamy &quot;_id&quot; i &quot;id&quot; są to dwa r&oacute;żne id i do operacji delete update potrzebne jest te z podłogą</p>
  <h3 style="color:red">Poniższe adresy to ścieżki względne do wklejenia po "http://localhost:8080/"</h3>
  <!-- <h2>Adresy api dla Users</h2>
  <p>/user</p>
  <p>/findEmail/:email</p>
  <p>/findByemail</p>
  <p>/findPassword/:email,:password</p>
  <p>/findWithPassword</p>
  <p>/findWithPassword/:email,:password</p>

  <p>/findLogin/:email,:password</p>
  <p>/findForLogin</p>

  <p>/findForLogin/:email,:password</p>
  <p>&nbsp;/findByUser/:username</p>
  <p>/findByUserId/:idUser</p>
  <p>&nbsp;/update-user/:id</p>

  <p>&nbsp;/delete-user/:id</p>
  <p><br></p>
  <h2>Adresy api dla Roless</h2>
  <p>/role</p>
  <p>/role/add-role</p>
  <p>/role/findByrole/:roleName</p>
  <p>/role/update-role/:id</p>
  <p>/role/delete-role/:id</p>
  <p><br></p>
  <h2>Adresy api dla Reports</h2>
  <p>/report</p>
  <p>/report/add-report</p>
  <p>/report/findByreporttype/:type</p>
  <p>/report/findByreportid/:id</p>
  <p>/report/update-report/:id</p>
  <p>/report/delete-report/:id</p>
  <p><br></p>
  <h2>Adresy api dla Reactions</h2>
  <p>/reaction/add-reaction</p>
  <p>/reaction</p>
  <p>/reaction/findByreactiontype/:type</p>
  <p>/reaction/findByreactionid/:id</p>
  <p>/reaction/update-reaction/:id</p>
  <p>/reaction/delete-reaction/:id</p>
  <p><br></p>
  <h2>Adresy api dla Ranks</h2>
  <p>/rank/add-rank</p>
  <p>/rank</p>
  <p>/rank/findByrankid/:id</p>
  <p>/rank/update-rank/:id</p>
  <p>/rank/delete-rank/:id</p>
  <p><br></p>
  <h2>Adresy api dla Posts</h2>
  <p>/post/add-post</p>
  <p>/post</p>
  <p>/post/findBypost/:idPost</p>
  <p>/post/update-post/:id</p>
  <p>/post/delete-post/:id</p>
  <p><br></p>
  <h2>Adresy api dla Permissions</h2>
  <p>/permission/add-permission</p>
  <p>/permission</p>
  <p>/permission/findBypermission/:id</p>
  <p>/permission/findBypermissiontype/:type</p>
  <p>/permission/update-permission/:id</p>
  <p>/permission/delete-permission/:id</p>
  <p><br></p>
  <h2>Adresy api dla Files</h2>
  <p>/file/add-file</p>
  <p>/file</p>
  <p>/file/findByfilename/:name</p>
  <p>/file/findByfile/:id</p>
  <p>/file/update-file/:id</p>
  <p>/file/delete-file/:id</p>
  <p><br></p>
  <h2>Adresy api dla Comments</h2>
  <p>/comment/add-comment</p>
  <p>/comment</p>
  <p>/comment/findBycomment/:id</p>
  <p>/comment/update-comment/:id</p>
  <p>/comment/delete-comment/:id</p>
  <p><br></p>
  <h2>Adresy api dla Category</h2>
  <p>/category/add-category</p>
  <p>/category</p>
  <p>/category/findBycategorysubjectName/:subjectName</p>
  <p>/category/findBycategoryidThread/:idThread</p>
  <p>/category/update-category/:id</p>
  <p>/category/delete-category/:id</p> -->
  </div>
  </html>
  
  `;
  res.send(html);
});
router.get("/form", function (req, res) {
  // const html = `<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Document</title>
  // </head>
  // <body>
  //     <form action="/add-user" method="post">
  //         idUser <input type="text" name="idUser"><br><br>
  //         username <input type="text" name="username"> <br><br>
  //         email <input type="text" name="email"><br><br>
  //         password <input type="text" name="password"><br><br>
          
  //         <button type="submit">Zarejestruj sie</button>
  //     </form>
  // </body>
  // </html>`;
  // res.send(html);
});

module.exports = router;
