const express = require('express');
const router = express.Router();
const model = require('../model/user');

//encryption
const bcrypt = require('bcrypt')
const {tkGive} = require('../../middleware/tkservice')

//  /user
// GET ALL USERS
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
router.post('/reg', async (req, res) =>{
  try{
    let salty = await bcrypt.genSalt(12)
    let encryptedPass = await bcrypt.hash(req.body.password, salty);
    const token = tkGive(req.body.email);
    const user = {  
                  password: encryptedPass,
                  email: req.body.email,
                  username: req.body.username,
                  name: req.body.name,
                  pfp: req.body.pfp,
                  role: req.body.role_id
                };
    // first we check if the email exists
    model.findByEmail(user.email)
    .then(emailCheck =>{
      emailCheck === undefined || emailCheck.email != user.email && user
      // email, password, and name are required to create a new user
      ? !user.password || !user.email || !user.name
        ? res.status(400).json({message: 'Please provide an email, name and password while creating a user'})
        : model.add(user) &&  res.status(201).json({user, token})
      :res.status(409).json({message: 'Email aready exists'});
    });
  }
  catch(error){
    res.status(500).send(error);
  }
})

// ROUTE TO SIGN IN
router.post('/login', async (req, res) => {
let {email , password} = req.body;

// fist search for the email
model.findByEmail(email)
  .then(user=>{
    // compare passwords to see if they match
    if(user && bcrypt.compareSync(password, user.password)){
      // generate token //
      const token = tkGive(user.email);
      //   send   //
      res.status(202).json({
        message: `Welcome ${user.username}.` , token
      });
    } else {
      res.status(422).json({message: 'Invalid Login'});
    }
  })
  .catch(error =>{
    res.status(500).json(error);
  }
)})

// Find user by ID
router.get('/:id', (req, res) => {
  try{
      model.findById(req.params.id)
      .then(user => {
          user
          ? res.status(200).json(user)
          : res.status(404).json({ message: 'There are no users that have this ID' });
        })
  }catch(error){
      res.status(500).json(error);
  }
});

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