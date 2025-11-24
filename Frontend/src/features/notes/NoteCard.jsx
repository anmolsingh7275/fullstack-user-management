function NoteCard({ note }) {
  return (
    <div
      className="w-full rounded-xl bg-white dark:bg-gray-800 p-4 sm:p-5 shadow-sm hover:shadow-md
                 border border-gray-100 dark:border-gray-700 transition-shadow"
    >
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1.5 line-clamp-1">
        {note.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed break-words">
        {note.content}
      </p>
    </div>
  );
}

export default NoteCard;
