const express = require('express');
const router = express.Router();
const model = require('../model/thread');

// auth middleware
const routeGuardian = require('../../middleware/routeGuardian')

// /thread

// GET ALL @ /
router.get('/', async (req, res) => {
    try{
        const get = await model.find();
        return get === undefined
        ? res.status(404).json({message: 'No threads in database.'})
        : res.status(200).json(get);
    }catch(e){
        res.status(500).json(e);
    }
});

// POST THREAD TO /
router.post('/', async (req, res) => {
    try{
        const thread = req.body;
        const {title, message, user_id} = req.body;
        async function post(){await model.insert(thread)};
        !title || !message 
        ? res.status(422).json({message: 'A title and content are needed to create a thread.'})
        : post() && res.status(201).json(thread);
    }catch(e){
        res.status(500).json(e);
    }
});

// GET BY ID
router.get('/:id', async (req, res) => {
    try{
        await model.findById(req.params.id)
        .then(thread => {
            thread
            ? res.status(200).json(thread)
            : res.status(404).json({ message: 'There are no threads that have this ID' });
          })
    }catch(error){
        res.status(500).json(error);
    }
});

// GET BY USER
router.get('/user/:id', (req, res) => {
    try{
        model.findByUser(req.params.id)
        .then(usersThreads =>{
            !usersThreads
            ? res.status(404).json({ message: 'This user has no threads' })
            : res.status(202).json(usersThreads);
        })
    }catch(e){
        res.status(500).send(e);
    }

});

// DELETE
router.delete('/:id', (req, res) => {
    try{
        routeGuardian(req.headers.token, res);
        model.remove(req.params.id)
        .then(deleted => {
          deleted
          ? res.status(200).json({ message: 'Thread has been deleted' })
          : res.status(404).json({ message: 'There are no thread that have this ID' });
        })
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;