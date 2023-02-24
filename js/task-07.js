const inputEl = document.querySelector('#font-size-control');
const texttEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {
    texttEl.style.fontSize = `${inputEl.value}px`;
});



//Данна частинка коду робить розмір шрифта відповідно значенням контролера при завантаженні сторінки

texttEl.style.fontSize = `${inputEl.value}px`;


