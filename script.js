const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      return;
    }
    
    if (button.id === 'equal') {
      try {
        currentInput = eval(currentInput).toString();
      } catch (e) {
        currentInput = 'Error';
      }
      display.textContent = currentInput;
      return;
    }

    if (currentInput === 'Error') {
      currentInput = '';
    }

    const value = button.getAttribute('data-value');
    currentInput += value;
    display.textContent = currentInput;
  });
});
