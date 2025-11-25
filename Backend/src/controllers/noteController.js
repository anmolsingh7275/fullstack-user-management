const Note = require("../models/Note");

// Get all notes of logged-in user
exports.getNotes = async (req, res) => {
  const notes = await Note.find({ owner: req.user.id });
  res.json(notes);
};

// Create a new note
exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.create({
    title,
    content,
    owner: req.user.id
  });

  res.json(note);
};

exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedNote = await Note.findOneAndUpdate(
    { _id: id, owner: req.user.id },
    data,
    { new: true }
  );

  res.json(updatedNote);
};

exports.deleteNoteById = async (req, res) => {
  const { id } = req.params;

  await Note.findOneAndDelete({ _id: id, owner: req.user.id });

  res.json({ success: true });
};
