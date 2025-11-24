function Input(props) {
  return (
    <input
      {...props}
      className="border border-gray-300 dark:border-gray-700 p-3 w-full rounded-md bg-gray-50 dark:bg-gray-900
                 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    />
  );
}

export default Input;
