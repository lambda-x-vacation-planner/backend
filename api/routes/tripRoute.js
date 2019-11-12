const express = require('express');
const router = express.Router();
const model = require('../model/trip');

// /trips/
// GET ALL TRIPS
router.get('/', async(req, res) =>{
    try{
        await model.find()
        .then(trip =>{
            res.status(200).json(trip);
        })
    } catch(error){
        res.status(500).json(error);
    }
});

// GET TRIP BY ID
router.get('/:id', (req, res) => {
    try{
        model.findById(req.params.id)
        .then(trip => {
            trip
            ? res.status(200).json(trip)
            : res.status(404).json({ message: 'There are no trips that have this ID' });
          })
    }catch(error){
        res.status(500).json(error);
    }
});

// GET BY LOCATION
router.get('/:location', async (req, res) => {
    try{
        let areaLookUp = req.params

        model.findByLocation(areaLookUp.location)
        .then(trips => {res.status(200).json(trips);})
    }catch(error){
        res.status(500).json(error);
    }
});

// CREATE A TRIP
router.post('/', (req, res) => {
    try{
        const trip = req.body
        const {name, location, description} = req.body
        !name || !location || !description
        ? res.status(422).json({message: 'Please fill out name of the trip, location, and add a description.'})
        : model.insert(trip) && res.status(201).json(trip);
    }catch(error){
        res.status(500).json(error);
    }
});

// DELETE A TRIP
router.delete('/:id', (req, res) => {
    try{
        model.remove(req.params.id)
        .then(deleted => {
          deleted
          ? res.status(200).json({ message: 'Trip has been deleted' })
          : res.status(404).json({ message: 'There are no trips that have this ID' });
        })
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;