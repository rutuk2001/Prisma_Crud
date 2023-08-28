const express = require("express");
const {
  userLogout,
  signup,
  login,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(userLogout);
router.route("/deleteUser").delete(deleteUser);
router.route("/updateUser").put(updateUser);

module.exports = router;
