let inputsec = document.getElementById("inputplace");
let writeToResult = (value) => {
  inputsec.value += value;
};

let clrInp = () => {
  inputsec.value = "";
};

let plusOpr = (val) => {
  inputsec.value += val;

  inputsec.value += inputsec.value;
};
