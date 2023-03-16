// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputFontSizeEl = document.querySelector('#font-size-control');
console.log(inputFontSizeEl);
const spanTextEl = document.querySelector('#text');
console.log(spanTextEl);

inputFontSizeEl.addEventListener('input', (event) => {
  const fontSize = event.target.value;
  spanTextEl.style.fontSize = `${fontSize}px`;
});

// Для початку за допомогою querySelector знаходиш потрібні елементи - це інпут та текст (спан).
// Потім на інпут вішаємо слухача подій addEventListener('input', тут має бути колбек фінкція, яка і буде змінювати розмір тексту).
// Після чого в колбек функції через параметр event можна достукатись до значення повзунка event.currentTarget.value і це значення передати тексту як інлайн стиль.
// треба получити  значення (цифрове ) зі інпуту
// event.target.value
// і записати у фонт сайз
// span.style.fontSize