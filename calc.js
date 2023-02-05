const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.display');
    display.querySelector('span').textContent = calculator.displayValue;
}
updateDisplay();