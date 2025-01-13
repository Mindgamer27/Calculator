let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue || '0';
}

function performOperation(operator) {
  if (displayValue === '') return;
  if (firstOperand !== null && currentOperation) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  currentOperation = operator;
  displayValue = '';
}

function calculate() {
  if (currentOperation && firstOperand !== null) {
    secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
      case '+':
        displayValue = firstOperand + secondOperand;
        break;
      case '-':
        displayValue = firstOperand - secondOperand;
        break;
      case '×':
        displayValue = firstOperand * secondOperand;
        break;
      case '÷':
        displayValue = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
        break;
    }
    updateDisplay();
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
  }
}

function clearDisplay() {
  displayValue = '';
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  updateDisplay();
}

// Initialize display
updateDisplay();
