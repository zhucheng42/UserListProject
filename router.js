const express = require('express')
const router = express.Router()

let users = [
  {name:'Ben', age:'20'},
  {name:'John', age:'30'},
  {name:'Chris', age:'40'},
  {name:'Jane', age:'50'}
];

// get UserList /api/users
router.get('/users',(req,res)=>{
  res.send({
      msg:'get users succeed',
      data:users
})
})


// post user  /api/user
router.post('/user', (req, res) => {
  const newUser = req.body;
  console.log('new', newUser);
  if(newUser) {
    users.push(newUser)
    res.send({
      msg:'post user succeed',
      data: users
    })
      } else {
      res.status(400).send('user is required')
    }
 
})


// delete users /api/delete
router.delete('/delete', (req, res) => {
      users =[]
      res.send({
        msg:'delete user succeed'
      })
})


module.exports = router;