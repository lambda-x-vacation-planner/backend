const express = require('express');
const router = express.Router();
const model = require('../model/activity');

// /activity
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

// POST @ /
router.post('/', async (req, res) =>{
    try{
        const activity = req.body;
        // ALL ACTIVITIES MUST HAVE A HOST, KNOWING MOST OF THEM WILL BE USER SPONSORED IT WOULD MAKE WHOMEVER CREATED IT THE HOST
        const {host} = req.body;

        !host
        ? res.status(422).json({message: 'Every activity needs a HOST'})
        : model.insert(activity) 
        && res.status(200).json(activity);
        
    }catch(e){
        res.status(500).json(e);
    }
})

// DELETE BY ID
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

//GET by HOST
// This route can be used to search all the hosts activities
router.get('/host/:host', (req, res) => {
    try{
        let hostSearch = req.params.host

        model.findByHost(hostSearch)
        .then(activity =>{ 
            activity.host === hostSearch
            ? res.status(200).json(activity)
            : res.status(404).json({message: 'no host with that name can be found'}); })
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;