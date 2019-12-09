const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const logger = require('./middleware/logger')
const morgan = require('morgan')
require('dotenv').config();

const server = express();

// middleware
// for functioning with APPLICATIONS 
server.use(cors());
// for security
server.use(helmet());
// for logs
server.use(morgan("dev"));
server.use(logger);

// setting my data to be sent as json
server.use(express.json());
// server.use(express.urlencoded({extended: true}));

// server welcome message
server.get("/", (req, res) => {
  try {
    res.send(`Server is Alive & Willing.`);
  } catch (error) {
    res.status(500).json(error.response);
  }
});

// ROUTES
// users
const userRoute = require('./api/routes/userRoute');
server.use('/user', userRoute);

// user_activities that assonate with bookings and activities
const userActivityRoute = require('./api/routes/userActivityRoute')
server.use('/user/trip', userActivityRoute);

// booking
const userBookingRoute = require('./api/routes/bookingRoute.js');
server.use('/user/trip/book', userBookingRoute);

// photos
const photoRouter = require('./api/routes/photoRoute');
server.use('/gallery', photoRouter);

// notes
const noteRoute = require('./api/routes/noteRoute');
server.use('/user/note', noteRoute);

// activity
const activityRoute = require('./api/routes/activityRouter')
server.use('/activity', activityRoute);

// destinations
const destinationsRoute = require('./api/routes/destinationRouter');
server.use('/destine', destinationsRoute);

// threads
const threadRoute = require('./api/routes/threadRouter');
server.use('/thread' , threadRoute);
// posts
const postRoute = require('./api/routes/postRouter');
server.use('/thread/post', postRoute);

//exporting the server code
module.exports = server;
