// function 1

function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = Number(inputValue);
  return inputNumber;
}

function getInnerTextIntoNumById(id) {
  const text = document.getElementById(id).innerText;
  const textIntoNum = parseFloat(text);
  return textIntoNum;
}
