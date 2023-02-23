const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const counterScreenEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    counterScreenEl.textContent = counterValue;
});

incrementBtnEl.addEventListener('click', () => {
    counterValue += 1;
   counterScreenEl.textContent = counterValue;
})







//--- Скажіть будьласка, ось цей варіант коду працює без додаткової змінної. Чи може бути такий варіант, чи це не зовсім вірно..? --->

// decrementBtnEl.addEventListener('click', () => {
//     counterScreenEl.textContent -= 1;
// });

// incrementBtnEl.addEventListener('click', () => {
//    counterScreenEl.textContent = Number(counterScreenEl.textContent) + 1;
// })