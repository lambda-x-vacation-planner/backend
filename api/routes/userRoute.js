const express = require('express');

const router = express.Router();
const model = require('../model/user');

//encryption
const bcrypt = require('bcrypt')

//  /user
// GET & POST
router.get('/', (req, res) => {
  model.find()
    .then(user => {
      user 
      ? res.status(200).json(user) 
      : res.status(404).json({ error: 'Users Not Found' });
    }).catch(error =>
      res.status(500).send(error));
}
);

// ROUTE USED TO CREATE A USER
router.post('/', async (req, res) =>{

  try{
    let salty = await bcrypt.genSalt(12)
    let encryptedPass = await bcrypt.hash(req.body.password, salty);
    const user = {  
                  password: encryptedPass,
                  email: req.body.email,
                  username: req.body.username,
                  name: req.body.name,
                  pfp: req.body.pfp,
                  role: req.body.role_id
                };
    model.add(user);
    res.status(200).send(user);
  }
  catch{
      error => res.status(500).send(error) && console.log(error);
  }
})

// ROUTE TO SIGN IN
router.post('/login', async (req, res) => {
let {email , password } = req.body;

// fist search for the email
model.findByEmail(email)
  .then(user=>{
    // compare passwords to see if they match
    if(user && bcrypt.compareSync(password, user.password)){
      res.status(200).json({
        message: `Welcome ${user.username}.`
      });
    } else {
      res.status(422).json({message: 'Invalid Login'});
    }
  })
  .catch(error =>{
    res.status(500).json(error);
  }
)})

//* * * * * * * * * *
// /user/:id
// DELETE
router.delete('/:id',  (req, res) => {

    model.remove(req.params.id)
      .then(deleted => {
        deleted
        ? res.status(200).json({ message: 'Like they were never here.' })
        : res.status(404).json({ message: 'This is not the user you are looking for' });
      }).catch(error => 
        res.status(500).json(error));
});

module.exports = router;