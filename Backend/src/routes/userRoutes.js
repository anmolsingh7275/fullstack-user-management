const express = require("express");
const { getUser } = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/me", auth, getUser);

module.exports = router;
