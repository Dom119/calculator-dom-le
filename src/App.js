import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Toast } from "bootstrap";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState("0");
  const [allowPercentage, setAllowPercentage] = useState(true);

  const removeEverything = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setAllowPercentage(true); //click on any number or AC or = will allow true
  };

  const toggleNumber = () => {
    if (display !== 0) {
      setDisplay(String(parseFloat(display) * -1));
      if (!operator) {
        setFirstNumber(String(parseFloat(firstNumber) * -1));
      } else {
        setSecondNumber(String(parseFloat(secondNumber) * -1));
      }
    }
  };

  const takePercentage = () => {
    if (display !== 0 && allowPercentage) {
      setAllowPercentage(false);
      setDisplay(String(parseFloat(display) / 100));
      if (!operator) {
        setFirstNumber(String(parseFloat(firstNumber) / 100));
      } else {
        setSecondNumber(String(parseFloat(secondNumber) / 100));
      }
    }
  };

  const setDecimal = () => {
    if (!operator) {
      if (firstNumber.indexOf(".") === -1) setFirstNumber(firstNumber + ".");
    } else {
      if (secondNumber.indexOf(".") === -1) setSecondNumber(secondNumber + ".");
    }
  };

  const setKey = (number) => {
    if (operator === "") {
      if (firstNumber.length === 9) {
        prompt("Cannot calculate number with more than 9 digits.");
      } else {
        setFirstNumber(firstNumber + number);
        setDisplay(firstNumber + number);
      }
    } else {
      if (secondNumber.length === 9) {
        prompt("Cannot calculate number with more than 9 digits.");
      } else {
        setSecondNumber(secondNumber + number);
        setDisplay(secondNumber + number);
      }
    }
  };

  const setMyOperator = (ope) => {
    setOperator(ope);
  };

  const operators = {
    "/": () => {
      return String(parseFloat(firstNumber) / parseFloat(secondNumber));
    },
    "*": () => {
      return String(parseFloat(firstNumber) * parseFloat(secondNumber));
    },
    "+": () => {
      return String(parseFloat(firstNumber) + parseFloat(secondNumber));
    },
    "-": () => {
      return String(parseFloat(firstNumber) - parseFloat(secondNumber));
    },
  };

  const calculate = () => {
    if (firstNumber && secondNumber && operator) {
      let result = operators[operator]();
      if (parseFloat(result) > 999999999) {
        prompt("The maximum value of result need to be under 999,999,999");
        removeEverything();
        setDisplay("0")
      } else {
        if (result.length > 9) {
          result = result.slice(0, 9);
        }
        setDisplay(result);
      }
    } else {
      prompt("You need to enter both numbers and operator, please do again");
      removeEverything()
      setDisplay("0")
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="display">
          {/* <h5>1+2+3*8-9</h5> */}
          <h1>{display}</h1>
        </div>
        <div className="keys">
          <div className="numbers">
            <div className="subNumber">
              <div
                className="key"
                onClick={() => {
                  removeEverything();
                  setDisplay("0");
                }}
              >
                AC
              </div>
              <div className="key" onClick={toggleNumber}>
                +/-
              </div>
              <div className="key" onClick={takePercentage}>
                %
              </div>
            </div>
            <div className="subNumber">
              <div className="key" onClick={() => setKey("1")}>
                1
              </div>
              <div className="key" onClick={() => setKey("2")}>
                2
              </div>
              <div className="key" onClick={() => setKey("3")}>
                3
              </div>
            </div>
            <div className="subNumber">
              <div className="key" onClick={() => setKey("4")}>
                4
              </div>
              <div className="key" onClick={() => setKey("5")}>
                5
              </div>
              <div className="key" onClick={() => setKey("6")}>
                6
              </div>
            </div>
            <div className="subNumber">
              <div className="key" onClick={() => setKey("7")}>
                7
              </div>
              <div className="key" onClick={() => setKey("8")}>
                8
              </div>
              <div className="key" onClick={() => setKey("9")}>
                9
              </div>
            </div>
            <div className="subNumber">
              <div className="key keyLong" onClick={() => setKey("0")}>
                0
              </div>
              <div className="key" onClick={setDecimal}>
                .
              </div>
            </div>
          </div>
          <div className="operators">
            <div className="key keyOperator" onClick={() => setMyOperator("/")}>
              /
            </div>
            <div className="key keyOperator" onClick={() => setMyOperator("*")}>
              *
            </div>
            <div className="key keyOperator" onClick={() => setMyOperator("-")}>
              -
            </div>
            <div className="key keyOperator" onClick={() => setMyOperator("+")}>
              +
            </div>
            <div
              className="key keyOperator"
              onClick={() => {
                calculate();
                removeEverything();
              }}
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
