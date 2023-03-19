const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/user GET, Create, delete
router.route("/").get(getUser).post(createUser);

// /api/users/:userId single user, delete user
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/user/:friendID/user/:friendId add and delete friend
router.route("/:userId/friends/:friendId").delete(deleteFriend).post(addFriend);

module.exports = router;
