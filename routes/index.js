var express = require('express');
var router = express.Router();

// const db=require('../controller/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  return  res.status(201).send("Hello world");
});

// router.get('/user', async function(req, res, next) {
//   const users = await db.user.findALL();
//   res.status(201).send(users);
// });

module.exports = router;
