const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const logger = require('./middleware/logger')

const server = express()

// middleware
server.use(cors());
server.use(helmet());
server.use(logger);

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

// routes
// users
const userRouter = require('./api/routes/userRoute');
server.use('/user', userRouter)

//exporting the server code
module.exports = server;