const express = require('express');
const router = express.Router();
const model = require('../model/userActivity');

// middleware
const routeGuardian = require('../../middleware/routeGuardian');

// /user/trip
// GET ALL 
router.get('/', async (req, res) =>{
    try{
        await model.find()
        .then(a =>{
            res.status(200).json(a);
        })
    }catch(e){
        res.status(500).json(e);
    }
})

// POST @ /user/trip/
router.post('/' , async (req, res) =>{
    try{
        routeGuardian(req.headers.token, res);

        const activity = req.body;
        // ALL ACTIVITIES MUST HAVE A HOST, KNOWING MOST OF THEM WILL BE USER SPONSORED IT WOULD MAKE WHOMEVER CREATED IT THE HOST
        const {activity_id, booking_id, user_id} = req.body;

        !activity_id || !booking_id || !user_id
        ? res.status(422).json({message: 'You could not perform this action, make sure you have booked the activity first'})
        : model.insert(activity) 
        && res.status(201).json(activity);
        
    }catch(error){
        res.status(500).send(error);
    }
})

// DELETE BY ID
router.delete('/:id', (req, res) => {
    try{
        routeGuardian(req.headers.token, res);
        model.remove(req.params.id)
        .then(deleted => {
          deleted
          ? res.status(200).json({ message: 'Activity has been deleted' })
          : res.status(404).json({ message: 'There are no activates that have this ID' });
        })
    }catch(error){
        res.status(500).json(error);
    }
});

// GET by ID
router.get('/:id', async (req, res) => {
    try{
        routeGuardian(req.headers.token, res);
        await model.findById(req.params.id)
        .then(activity => {
            activity
            ? res.status(200).json(activity)
            : res.status(404).json({ message: 'There are no activities that have this ID' });
          })
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;