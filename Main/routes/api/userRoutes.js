const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require("../../controllers/userController");

// /api/students
router.route("/").get(getUser).post(createUser);

// /api/students/:studentId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route("/:userId/thought").post(addThought);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:userId/thought/:thoughtId").delete(removeThought);
