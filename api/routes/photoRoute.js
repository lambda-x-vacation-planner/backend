const express = require("express");
const photoRouter = express.Router();
const model = require("../model/photo");
const upload = require("../../middleware/multer");

// SAVE A PHOTO - currently by file path, check for issues with deployment
photoRouter.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.status(422).send({ message: "Please make sure to upload a photo" });
  } else {
    const photo = {
      image: req.file.path,
      name: req.file.filename,
      location: req.body.location,
      description: req.body.description,
    };
    if (!photo) {
      res
        .status(422)
        .send({ message: "Please make sure all fields are completed" });
    }
    model
      .insert(photo)
      .then(savedPhoto => {
        res.status(201).json(savedPhoto);
      })
      .catch(err => {
        res.status(500).send({
          err: "Error saving photo to database",
        });
      });
  }
});

// GET ALL PHOTOS
photoRouter.get("/", (req, res) => {
  model
    .find()
    .then(photos => {
      res.status(200).json(photos);
    })
    .catch(err => {
      res.status(500).send({
        error: "Error getting photos from database",
      });
    });
});

// GET PHOTO BY ID
photoRouter.get("/:id", (req, res) => {
  const photoID = req.params.id;
  model
    .findById(photoID)
    .then(photo => {
      if (!photo) {
        res.status(404).send({ message: "No photo with this ID" });
      } else {
        res.status(200).json(photo);
      }
    })
    .catch(err => {
      res.status(500).send({
        error: "Error getting photo from database",
      });
    });
});

// UPDATE A PHOTO
photoRouter.put("/:id", (req, res) => {
  const photo = {
    location: req.body.location,
    description: req.body.description,
  };
  const photoID = req.params.id;
  model
    .update(photoID, photo)
    .then(updatedPhoto => {
      if (!updatedPhoto) {
        res.status(404).send({ message: "No photo with this ID" });
      } else {
        res.status(200).json(updatedPhoto);
      }
    })
    .catch(err => {
      res.status(500).send({
        err: "Error updating photo",
      });
    });
});

// DELETE A PHOTO
photoRouter.delete("/:id", (req, res) => {
  const photoID = req.params.id;
  model
    .remove(photoID)
    .then(removedPhoto => {
      if (!removedPhoto) {
        res.status(404).send({ message: "No photo with this ID" });
      } else {
        res.status(200).json(removedPhoto);
      }
    })
    .catch(err => {
      res.status(500).send({
        error: "Error with deleting photo",
      });
    });
});

module.exports = photoRouter;
