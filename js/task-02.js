const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients');

const makeMarking = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;

    return itemEl;
  })
};

const arrayItemsList = makeMarking(ingredients);

ingredientEl.append(...arrayItemsList);
