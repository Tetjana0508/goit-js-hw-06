function getRandomHexColor() { /* Для генерации случайного цвета функция - getRandomHexColor */
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/*Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.*/

const backgroundColorEl = document.querySelector('body'); /* ссылка на body */
// console.log(backgroundColorEl);

const chowColor = document.querySelector('.color'); /* ссылка на span */
const buttonChangeColor = document.querySelector('.change-color'); /* ссылка на кнопку */

buttonChangeColor.addEventListener('click', () => { /* вешаем прослушивание клика (addEventListener) click на кнопку и при клике выполниется код */
  backgroundColorEl.style.backgroundColor = getRandomHexColor();
  chowColor.textContent = getRandomHexColor();
})
// console.log(buttonChangeColor);