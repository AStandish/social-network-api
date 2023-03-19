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

// /api/thoughts
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:reactionId get one thought, update, and delete
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/reaction
router.route("/:thoughtId/reaction").post(addReaction);

// /api/thoughts/:reactionId/reaction/:reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
