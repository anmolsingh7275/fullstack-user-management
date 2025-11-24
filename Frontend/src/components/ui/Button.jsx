function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg 
      hover:bg-blue-700 dark:hover:bg-blue-600 
      active:scale-95 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 
      transition-all duration-200 ease-in-out 
      shadow-sm hover:shadow-md"
    >
      {children}
    </button>
  );
}

export default Button;
