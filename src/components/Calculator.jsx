import React, { useState } from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
import ClearButton from "./ClearButton";
import Display from "./Display";

function Calculator() {
  const [final, setFinal] = useState();
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState("0");
  const [operator, setOperator] = useState();
  const [isFirstOperand, setIsFirstOperand] = useState(true);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function handleNumberButtonClick(number) {
    if (display.length < 20) {
      if (isFirstOperand) {
        if (display === "0") {
          setDisplay(String(number));
          setFirstOperand(String(number));
        } else {
          setDisplay(display + number);
          setFirstOperand(display + number);
        }
      } else {
        if (secondOperand === "0") {
          setDisplay(String(number));
          setSecondOperand(String(number));
        } else {
          setDisplay(display + number);
          setSecondOperand(display + number);
        }
      }
    }
  }

  function handlePlusButtonClick(event) {
    setOperator("+");
    event.currentTarget.classList.add("OperatorsActive");
    document.querySelector(".minusButton").classList.remove("OperatorsActive");
    document
      .querySelector(".multipleButton")
      .classList.remove("OperatorsActive");
    document.querySelector(".dividButton").classList.remove("OperatorsActive");
    setIsFirstOperand(false);
  }
  function handleMinusButtonClick(event) {
    setOperator("-");
    event.currentTarget.classList.add("OperatorsActive");
    document.querySelector(".plusButton").classList.remove("OperatorsActive");
    document
      .querySelector(".multipleButton")
      .classList.remove("OperatorsActive");
    document.querySelector(".dividButton").classList.remove("OperatorsActive");
    setIsFirstOperand(false);
  }
  function handleMultipleButtonClick(event) {
    setOperator("*");
    event.currentTarget.classList.add("OperatorsActive");
    document.querySelector(".plusButton").classList.remove("OperatorsActive");
    document.querySelector(".minusButton").classList.remove("OperatorsActive");
    document.querySelector(".dividButton").classList.remove("OperatorsActive");
    setIsFirstOperand(false);
  }
  function handleDividButtonClick(event) {
    setOperator("/");
    event.currentTarget.classList.add("OperatorsActive");
    document.querySelector(".plusButton").classList.remove("OperatorsActive");
    document.querySelector(".minusButton").classList.remove("OperatorsActive");
    document
      .querySelector(".multipleButton")
      .classList.remove("OperatorsActive");
    setIsFirstOperand(false);
  }

  function handleEqualButtonClick() {
    if (setIsFirstOperand) {
      setFinal("Add a second operand too!");
    }
    if (operator === "+") {
      setFinal(Number(firstOperand) + Number(secondOperand));
    }
    if (operator === "-") {
      setFinal(Number(firstOperand) - Number(secondOperand));
    }
    if (operator === "*") {
      setFinal(Number(firstOperand) * Number(secondOperand));
    }
    if (operator === "/") {
      setFinal(Number(firstOperand) / Number(secondOperand));
    }
    setDisplay("0");
    setOperator(null);
    setFirstOperand("0");
    setSecondOperand("0");
    setIsFirstOperand(true);
    document.querySelector(".plusButton").classList.remove("OperatorsActive");
    document.querySelector(".minusButton").classList.remove("OperatorsActive");
    document
      .querySelector(".multipleButton")
      .classList.remove("OperatorsActive");
    document.querySelector(".dividButton").classList.remove("OperatorsActive");
  }

  function handleClearButtonClick() {
    setFinal();
    setDisplay("0");
    setOperator(null);
    setFirstOperand("0");
    setSecondOperand("0");
    setIsFirstOperand(true);
    document.querySelector(".plusButton").classList.remove("OperatorsActive");
    document.querySelector(".minusButton").classList.remove("OperatorsActive");
    document
      .querySelector(".multipleButton")
      .classList.remove("OperatorsActive");
    document.querySelector(".dividButton").classList.remove("OperatorsActive");
  }

  const numberButtonGenerator = numbers.map((number) => (
    <NumberButton
      key={number}
      number={number}
      onClick={() => handleNumberButtonClick(number)}
    />
  ));

  return (
    <>
      <Display final={final} display={display}></Display>
      {numberButtonGenerator}
      <OperatorButton
        className="plusButton"
        operator="+"
        onClick={handlePlusButtonClick}
      />
      <OperatorButton
        className="minusButton"
        operator="-"
        onClick={handleMinusButtonClick}
      />
      <OperatorButton
        className="multipleButton"
        operator="*"
        onClick={handleMultipleButtonClick}
      />
      <OperatorButton
        className="dividButton"
        operator="/"
        onClick={handleDividButtonClick}
      />
      <EqualButton
        className="EqualButton"
        operator="="
        onClick={handleEqualButtonClick}
      />
      <ClearButton
        className="ClearButton"
        operator="C"
        onClick={handleClearButtonClick}
      />
    </>
  );
}

export default Calculator;
