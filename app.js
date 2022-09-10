const btnCheck = document.querySelector("#btn-check1");
const txtInput = document.querySelector("#input1");
const outputDiv = document.querySelector("#output1");

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

const btnCheck1 = document.querySelector("#btn-check2");
const txtInput1 = document.querySelector("#input2");
const outputDiv1 = document.querySelector("#output2");

const checkLeap = function () {
  outputDiv1.innerText = "";

  let inputText1 = txtInput1.value;

  inputText1 = Number(inputText1);

  if (!isNaN(inputText1) && inputText1 < 2021 && inputText1 > 1000) {
    isLeap = "This is a leap year";
    isNotLeap = "This is not a leap year";

    if (
      (0 == inputText1 % 4 && 0 != inputText1 % 100) ||
      0 == inputText1 % 400
    ) {
      outputDiv1.innerText = isLeap;
    } else {
      outputDiv1.innerText = isNotLeap;
    }
  } else {
    outputDiv1.innerText = "Please enter a valid Birthyear in numerals!!";
  }
};

btnCheck1.addEventListener("click", checkLeap);
