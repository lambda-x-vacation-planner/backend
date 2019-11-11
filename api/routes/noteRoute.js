const express = require('express');
const router = express.Router();
const model = require('../model/note');

// /user/note/
// GET ALL NOTES *only for dev purposes*
router.get('/', (req, res) => {
    try{
        // this key is so only developers can see all notes
        const dev_key = (req.body.note === process.env.DEV_KEY || false)

        dev_key
        ? model.find().then(note =>{
            res.status(200).json(note);
        }).catch(error => res.status(500).send(error))
        : res.status(422).json({message: 'You are not authorized.'});

    } catch(error){
        res.status(500).send(error);
    }
});

module.exports = router;