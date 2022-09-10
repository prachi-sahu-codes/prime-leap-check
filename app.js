const btnCheck = document.querySelector(".btn-check");
const txtInput = document.querySelector(".input");
const outputDiv = document.querySelector(".output");

let isPrime;
let isNotPrime;

const checkPrime = function () {
  outputDiv.innerText = "";
  let inputText = txtInput.value;
  inputText = Number(inputText);
  console.log(inputText);
  if (!isNaN(inputText)) {
    isPrime = "This is a prime number";
    isNotPrime = "This is not a prime number";

    if (inputText <= 1) {
      outputDiv.innerText = isNotPrime;
      // return isNotPrime;
    }
    if (inputText === 2) {
      outputDiv.innerText = isPrime;
    }

    for (let i = 2; i < inputText; i++) {
      if (inputText % i === 0) {
        outputDiv.innerText = isNotPrime;
        break;
      }
      outputDiv.innerText = isPrime;
    }
  } else {
    outputDiv.innerText = "Please enter numeral value!!";
  }
};

btnCheck.addEventListener("click", checkPrime);
