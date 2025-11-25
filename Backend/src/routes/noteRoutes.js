const express = require("express");
const auth = require("../middlewares/authMiddleware");
const { getNotes, createNote } = require("../controllers/noteController");

const { updateNote, deleteNoteById } = require("../controllers/noteController");

const router = express.Router();

router.get("/", auth, getNotes);
router.post("/", auth, createNote);
router.put("/:id", auth, updateNote);
router.delete("/:id", auth, deleteNoteById);


module.exports = router;
