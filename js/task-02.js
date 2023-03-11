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

const ingredientsEl = (options) => {
  return options.map((option) => {
    const navItemEl = document.createElement('li');
    navItemEl.classList.add('item');
    navItemEl.textContent = option;
    return navItemEl;
  });
};

const navItemlist = ingredientsEl(ingredients);
listEl.append(...navItemlist);
