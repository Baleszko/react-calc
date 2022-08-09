import Button from "./Button";

function NumberButton({ number, onClick }) {
  return (
    <Button className="Numbers" onClick={onClick} type={number}>
      {" "}
    </Button>
  );
}

export default NumberButton;
