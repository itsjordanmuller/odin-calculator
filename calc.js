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

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        const { target } = event;
        inputNumber(target.textContent);
        updateDisplay();
    });
});

function inputNumber(number) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = number;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue =
            calculator.displayValue === '0' ? number : calculator.displayValue + number;
    }
}

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        const { target } = event;
        handleOperator(target.textContent);
        updateDisplay();
    });
});