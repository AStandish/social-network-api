const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUser).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/user/:userId/friends
router.route("/:userId/friends").post(addFriend);

// /api/user/:friendID/user/:friendId
router.route("/:userId/friends/:friendId").delete(deleteFriend);
