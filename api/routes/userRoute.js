const express = require('express');
const router = express.Router();
const model = require('../model/user');

//  /user
// GET & POST
router.get('/', (req, res) => {

  model.find()
    .then(user => {
      !user 
      ? res.status(200).json(user) 
      : res.status(404).json({ error: 'Users Not Found' });
    }).catch(error =>
      res.status(500).send(error));
}
);

router.post('/', (req, res) =>{
  const user = req.body;

  // NEED TO ADD AN AUTH SERVICE!
  !user.email
  ? res.status(400).json({ message: 'No Email!' })
  : model.add(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => 
      res.status(500).send(error));
})

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