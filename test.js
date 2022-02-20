const firstNumber="5"
const secondNumber="2"

const operators = {
  "/": () => {
    return String(
      (Math.round(parseFloat(firstNumber) / parseFloat(secondNumber)) * 100) /
        100
    );
  },
  "*": () => {
    console.log(
      "Result from multiple",
      String(
        Math.round(parseFloat(firstNumber) * parseFloat(secondNumber) * 100) /
          100
      )
    );
    return String(
      Math.round(parseFloat(firstNumber) * parseFloat(secondNumber) * 100) / 100
    );
  },
  "+": () => {
    return String(
      (Math.round(parseFloat(firstNumber) + parseFloat(secondNumber)) * 100) /
        100
    );
  },
  "-": () => {
    return String(
      (Math.round(parseFloat(firstNumber) - parseFloat(secondNumber)) * 100) /
        100
    );
  },
};

// const calculate = () => {
//   setDisplay(operators[operator]());
//   console.log("Result", operators[operator]());
// };

const ope = "*"
const test = operators[ope]()


console.log(test);
console.log(typeof(test));