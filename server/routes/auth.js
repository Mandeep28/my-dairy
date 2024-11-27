// external packages
const express = require("express");
const {
  register,
  login,
  verifyEmail,
  getUserDetail,
  resetPassword,
  forgotPassword,
} = require("../controller/auth");

const fetchUser = require("../middleware/fetchUserDetail");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verify-email", verifyEmail);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPassword);
router.get("/getdetail", fetchUser, getUserDetail);

module.exports = router;
