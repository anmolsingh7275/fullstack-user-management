function NoteCard({ note }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold">{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
}

export default NoteCard;
