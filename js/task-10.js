function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.*/


const inputEl = document.querySelector('[type="number"]'); /* ссылка на input */
const createButton = document.querySelector('[data-create]'); /* ссылка на button Create */
const destroyButton = document.querySelector('[data-destroy]'); /* ссылка на button Destroy */
const boxes = document.querySelector('#boxes'); /* ссылка на button div boxes */

createButton.addEventListener('click', getAmount); /* вешаем прослушивание клика (addEventListener) click на кнопку Create и при клике выполниется код getAmount */
destroyButton.addEventListener('click', destroyBoxes); /* вешаем прослушивание клика (addEventListener) click на кнопку Destroy и при клике выполниется код destroyBoxes */
function getAmount() { /* ссылка на элемент в [type="number"], и его value значение (число) */
  createBoxes(inputEl.value);
}
function destroyBoxes() { /* ссылка на элемент в #boxes; свойство innerHTML записывает пустую строку, для очищения содержимого в #boxes; очищение в input (число) */
  boxes.innerHTML = '';
  inputEl.value = '';
}
function createBoxes(amount) {
  const defaultSize = 30;
  let newSize = 0;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    newSize = defaultSize + i * 10;
    box.style = `width: ${newSize}px; height: ${newSize}px;
    background-color: ${getRandomHexColor()}`;
    boxes.append(box);
  }
}