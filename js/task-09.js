const btnChangeColorEl = document.querySelector('.change-color');
const spanColorEL = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnChangeColorEl.addEventListener('click', hendlChangeColorClick);
 
function hendlChangeColorClick() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorEL.textContent =  `${getRandomHexColor()}`
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

