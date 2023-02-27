const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");

// /api/courses
router.route("/").get(getThought).post(createThought);

// /api/courses/:courseId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtsId/reaction").post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:thoughtsId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
