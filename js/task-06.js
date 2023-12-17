function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= input.min && amount <= input.max) {
    createBoxes(amount);
  }
  input.value = '';
});

buttonDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function createBoxes(amount) {
  boxes.innerHTML = '';
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newEl = document.createElement('div');
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = `${size}px`;
    newEl.style.height = `${size}px`;
    boxes.appendChild(newEl);
    size += 10;
  }
}
