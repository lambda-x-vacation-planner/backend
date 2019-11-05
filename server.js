const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

const server = express()

// middleware
server.use(cors());
server.use(helmet());

// setting my data to be sent as json
server.use(express.json());

// server
server.get('/', (req,res) => {
    try {
    res.send(`Server Online`);
    } catch(error) {
      res.status(500).json(error.response);
    }
  });

//exporting the server code
module.exports = server;