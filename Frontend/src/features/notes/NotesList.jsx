import { useEffect, useState } from "react";
import { getNotes } from "../../services/noteService";
import NoteCard from "./NoteCard";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(res => setNotes(res.data));
  }, []);

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {notes.map(note => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NotesList;
