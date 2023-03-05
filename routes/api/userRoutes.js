const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/user GET, Create, delete
router.route("/").get(getUser).post(createUser);

// /api/users/:userId single user, delete user
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/user/:userId/friends add friend
router.route("/:userId/friends").post(addFriend);

// /api/user/:friendID/user/:friendId delete friend
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
