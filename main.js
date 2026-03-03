const generatorBtn = document.getElementById('generator-btn');
const numbersContainer = document.getElementById('numbers-container');

generatorBtn.addEventListener('click', () => {
  numbersContainer.innerHTML = '';
  const numbers = [];
  while (numbers.length < 6) {
    const number = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  numbers.sort((a, b) => a - b);
  numbers.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = number;
    numbersContainer.appendChild(numberElement);
  });
});