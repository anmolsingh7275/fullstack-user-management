function NoteDetails() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Note Details
        </h1>
        <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed break-words">
          {/* Replace this with actual note content */}
          This is where the full note content will be shown.
        </div>
      </div>
    </div>
  );
}

export default NoteDetails;
