import Button from "./Button";

function ClearButton({ className, operator, onClick }) {
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

export default ClearButton;
