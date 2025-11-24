import { useEffect, useState } from "react";
import { getNotes } from "../../services/noteService";
import NoteCard from "./NoteCard";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(res => setNotes(res.data));
  }, []);

  return (
    <div className="grid gap-4 p-4">
      {notes.map(note => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
