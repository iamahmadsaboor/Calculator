let inputsec = document.getElementById("inputplace");

let writeToResult = (value) => {
  inputsec.value += value;
};

let clrInp = () => {
  inputsec.value = "";
};
let dFunc = () => {
  inputsec.value = inputsec.value.slice(0, -1);
};

let firstNumber = "";
let secondNumber = "";
let operator = "";

let evaluation = (value) => {
  firstNumber = inputsec.value;
  operator = value;
  inputsec.value = "";
};

let eqFunc = () => {
  let secondNumber = inputsec.value;
  let result;

  switch (operator) {
    case "+":
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case "*":
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case "/":
      result = Number(firstNumber) / Number(secondNumber);
      break;
    default:
      result = "Error";
      break;
  }

  inputsec.value = result;
};
