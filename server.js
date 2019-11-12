const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./middleware/logger");
const morgan = require("morgan");
// const bodyParser from 'body-parser';

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
const userRouter = require("./api/routes/userRoute");
server.use("/user", userRouter);

// photos
const photoRouter = require("./api/routes/photoRoute");
server.use("/gallery", photoRouter);

// notes
const noteRouter = require("./api/routes/noteRoute");
server.use("/user/note", noteRouter);

// trips
const tripRouter = require("./api/routes/tripRoute");
server.use("/trips", tripRouter);

//exporting the server code
module.exports = server;
