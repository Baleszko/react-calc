import Button from "./Button";

function EqualButton({ className, operator, onClick }) {
  return (
    <Button
      className={`Operators ${className}`}
      type={operator}
      onClick={onClick}
    >
      {" "}
    </Button>
  );
}

export default EqualButton;
