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