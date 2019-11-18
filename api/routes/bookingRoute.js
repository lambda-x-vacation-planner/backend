const express = require('express');
const router = express.Router();
const model = require('../model/booking');

// middleware
const routeGuardian = require('../../middleware/routeGuardian');

// /user/trip/book/
// GET ALL 
router.get('/', async (req, res) =>{
    try{
        routeGuardian(req.headers.token, res);
        await model.find()
        .then(bookings =>{
            res.status(200).json(bookings);
        })
    }catch(e){
        res.status(500).json(e);
    }
})

// POST @ /user/trip/book/
router.post('/' , async (req, res) =>{
    try{
        routeGuardian(req.headers.token, res);

        const booking = req.body;
        // ALL bookings must have a activity and a user
        const {activity_id, creator_user_id} = req.body;

        !activity_id || !creator_user_id
        ? res.status(422).json({message: 'Every activity needs a HOST'})
        : model.insert(booking)
        && res.status(201).json(booking);
        
    }catch(error){
        res.status(500).send(error);
    }
})

// DELETE
router.delete('/:id', (req, res) => {
    try{
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

// GET by Activity's Id
// /user/trip/book/activity/:id
router.get('/activity/:id', async (req, res) =>{
    try{
        routeGuardian(req.headers.token, res);
        await model.findByActivity(req.params.id)
        .then(bookingActivity =>{
            !bookingActivity
            ? res.status(404).json({message:'could not find booking associated with this activity'})
            : res.status(202).json(bookingActivity);
        })
    }catch(error){
        res.status(500).json(error);
    }
});

// /user/trip/book/:id/expense
// Get the expenses

module.exports = router;