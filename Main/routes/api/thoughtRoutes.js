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

// /api/htoughts
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:reactionId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtsId/reaction").post(addReaction);

// /api/thoughts/:reactionId/reaction/:reactionId
router.route("/:thoughtsId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
