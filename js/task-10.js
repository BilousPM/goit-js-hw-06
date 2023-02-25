const boxesEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('#controls input');


createBtnEl.addEventListener('click', hendleCreateMarkup);
destroyBtnEl.addEventListener('click', hendleRemuvMarkup);

function hendleCreateMarkup() {
  const allBoxes = createBoxes(inputEl.value);
  boxesEl.append(...allBoxes);
};

function createBoxes(amount) {
  const divBox = [];
  
   for (let i = 0; i < amount; i += 1){
    const div = document.createElement('div')
     div.style.backgroundColor = getRandomHexColor();
     div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    
    divBox.push(div)
  }
  return divBox;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function hendleRemuvMarkup(event) {
  boxesEl.innerHTML = '';
};
