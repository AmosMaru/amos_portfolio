function Button({ children, className }) {
  return (
    <button
      className={`px-6 py-3 text-white  transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
