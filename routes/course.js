const express = require("express");
const router = express.Router();
const Coursemodel = require("../models/Coursemodel");


// http://localhost:4000/api/courses
router.get("/", (req, res, next) => {
  // Get all the courses
  Coursemodel.find()
    .then((courseDocuments) => {
      res.status(200).json(courseDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/courses/{some-id}
router.get("/:id", (req, res, next) => {
  //Get one specific course
  Coursemodel.findById(req.params.id)
    .then((courseDocument) => {
      res.status(200).json(courseDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/courses/{some-id}
router.patch("/:id", (req, res, next) => {
  // Update a specific course
  Coursemodel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((courseDocument) => {
      res.status(200).json(courseDocument);
      // There's a trap !
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/burgers
router.post("/", (req, res, next) => {
  // Create a course
  Coursemodel.create(req.body)
    .then((courseDocument) => {
      res.status(201).json(courseDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/courses/{some-id}
router.delete("/:id", (req, res, next) => {
  // Deletes a course
  Coursemodel.findByIdAndRemove(req.params.id)
    .then((courseDocument) => {
      // res.sendStatus(204)
      res.status(204).json({
        message: "Successfuly deleted !",
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
  
