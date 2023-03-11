const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const listEl = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(navEl => {
const navItemEl = document.createElement('li');
navItemEl.classList.add('item');
  navItemEl.textContent = ingredients[0];
  console.log(navItemEl);
  return navItemEl;
});
listEl.append(...ingredientsEl);

// console.log(ingredientsEl);

// const navEl = document.querySelector('#ingredients');
// navEl.append(navItemEl);