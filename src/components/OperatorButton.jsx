import Button from "./Button";

function OperatorButton({ className, operator, onClick }) {
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

export default OperatorButton;
