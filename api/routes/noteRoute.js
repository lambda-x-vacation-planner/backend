const express = require('express');
const router = express.Router();
const model = require('../model/note');

// auth middleware
const routeGuardian = require('../../middleware/routeGuardian')

// /user/note/
// GET ALL NOTES *only for dev purposes*
router.get('/', (req, res) => {
try{
    const notes = model.find();
    res.status(200).send(notes);
    }catch(error){
        res.status(500).send(error);
    }
});

// post, delete, get by id, get by user
// POST @ /user/note/
router.post('/', (req, res) => {
    try{
        routeGuardian(req.headers.token, res);
        const note = req.body;
        note === undefined || note === nulls
        ? res.status(400).json({message: 'You need to write something first'})
        : model.insert(note) 
        && res.status(201).json(note);

    }catch(error){
        res.status(500).send(error);
    }

});

module.exports = router;