
// const listCategoriesEl = document.querySelector('#categories');
// const categoriesEl = listCategoriesEl.children;
// console.log(`Number of categories: ${categoriesEl.length}`);

const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);


itemEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
