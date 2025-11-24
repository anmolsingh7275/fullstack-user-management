const express = require("express");
const { getNotes, createNote } = require("../controllers/noteController");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", auth, getNotes);
router.post("/", auth, createNote);

module.exports = router;
