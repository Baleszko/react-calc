function Button({ className, type, onClick }) {
  return (
    <button onClick={onClick} className={`Button ${className}`}>
      {" "}
      {type}{" "}
    </button>
  );
}

export default Button;
