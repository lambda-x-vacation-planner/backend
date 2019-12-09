const express = require('express');
const router = express.Router();
const model = require('../model/destination');

// authorization middleware
const routeGuardian = require('../../middleware/routeGuardian')

// /destine
// POST @ / 
router.post('/', (req, res) => {
    try{
        const dest = req.body;
        const {location, name, arrival_date} = req.body;
        // for a suer to create a destination they must have all location, name, arrival_date filled out
        !location || !name || !arrival_date
        ? res.status(422).json({message: 'To create a destination you must have a Name, Location, and the date/time when you re expected to arrive.'})
        : model.insert(dest) && res.status(201).json(dest);

    } catch(error){
        res.status(500).json(error);
    }
});

// GET by ID
// making it so hesitations can only be grabbed by ID limits the api's ablitiy to be used to spy on everyone elses destinations when they arent associated with an activity.
// this is an activity first type of architecture.
router.get('/:id', async (req, res) => {
    try{
        await model.findById(req.params.id)
        .then(destination => {
            destination
            ? res.status(200).json(destination)
            : res.status(404).json({ message: 'There are no activities that have this ID' });
          })
    }catch(error){
        res.status(500).json(error)
    }});

// DELETE
router.delete('/:id', (req, res) => {
    routeGuardian(req.headers.token, res);
    try{
        model.remove(req.params.id)
        .then(deleted => {
          deleted
          ? res.status(200).json({ message: 'This destination has been removed' })
          : res.status(404).json({ message: 'Something has gone wrong! You cannot search for destinations that do not exist' });
        })
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;