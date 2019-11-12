const express = require("express");
const photoRouter = express.Router();
const model = require("../model/photo");
const multerUploads = require("../../middleware/multer");

// just logging image data for now
photoRouter.post("/", multerUploads, (req, res) => {
  if (req.file) {
    console.log("req.body :", req.body);
    console.log("req.file :", req.file);
    console.log("done");
  } else {
    console.log("No File Uploaded");
  }
});

// // test upload photos
// // router.post('/upload',upload.single('image'), (req, res)=>{
// //   try{
// //     console.log(req.file, req.body)
// //   } catch(error){
// //     res.status(500).json(error) && console.log(error);
// //   }
// // })

//  /gallery
// GET
// router.get("/", (req, res) => {
//   model
//     .find()
//     .then(user => {
//       user
//         ? res.status(200).json(user)
//         : res.status(404).json({ error: "Users Not Found" });
//     })
//     .catch(error => res.status(500).send(error));
// });

// GET BY ID
// router.get('/:id', (req, res) => {
//     model.findById(req.body.id)
//       .then(photo => {
//         photo && model.insert(photo)
//         ? res.status(200).json(photo)
//         : res.status(404).json({ error: 'No Photos Found' });
//       }).catch(error =>
//         res.status(500).send(error) && console.log(error));
//   }
// );

// CREATE PHOTO
// router.post("/", (req, res) => {
//   console.log(res.body);
//   try {
//     console.log(photo);
//     model.insert(photo);
//     const photo = res.body;
//     photo ? res.status(200).json(photo) : res.status(422).json(photo);
//   } catch (error) {
//     res.status(500).send(error) && console.log(error);
//   }
// });

//* * * * * * * * * *
// /gallery/:id
// DELETE
// router.delete("/:id", (req, res) => {
//   model
//     .remove(req.params.id)
//     .then(deleted => {
//       deleted
//         ? res.status(200).json({ message: "Like they were never here." })
//         : res
//             .status(404)
//             .json({ message: "This is not the user you are looking for" });
//     })
//     .catch(error => res.status(500).json(error) && console.log(error));
// });

module.exports = photoRouter;
