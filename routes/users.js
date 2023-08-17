var express = require('express');
var router = express.Router();

const db = require("../models/index")

/* GET/Read users listing. */

router.get('/user', async function(req, res, next) {
  
  const users = await db.user.findAll({offset: 6})
  console.log("database_users", users);
    return res.status(200).send(users);
});


router.get('/user', async function(req, res, next) {
  
  const users = await db.user.findOne({
    where:{
      id:req.query.id
    }
  })
  console.log("database_users", users);
    return res.status(200).send(users);
});

// Creating user
router.post('/user', async function(req, res, next) {
  
  const users = await db.user.create(req.body)
  console.log("database_users", users);
    return res.status(200).send(users);
});

// Update
router.put('/user', async function(req, res, next) {
  
  const userName = await db.user.update({name1:"qwert"},{
    where:{
     id:5
    }
  })
  return res.status(200).send(userName);
  

});

// Delete


router.delete('/user', async function(req, res, next) {
  
  const deletedUser = await db.user.destroy({
    where: {
      name: "qwert"
    }
  });
  
 res.send("Deleted succeessfully");
});

// Creating an instance of a model
const jane = db.user.build({ name: "Ja" });
console.log(jane instanceof db.user); // true
console.log(jane.name); // "Jane"

// Creating async function
async function check(){
  let result = await jane.save();
  console.log('Jane was saved to the database!', result);
}

check();




module.exports = router;
