const Note = require("../models/Note");

async function getNotes(req, res) {
  const notes = await Note.find({ owner: req.user.id });
  res.json(notes);
}

async function createNote(req, res) {
  const { title, content } = req.body;
  const note = await Note.create({
    title,
    content,
    owner: req.user.id
  });
  res.json(note);
}

module.exports = { getNotes, createNote };
