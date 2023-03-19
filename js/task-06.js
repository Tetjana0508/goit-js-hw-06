// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputEl = document.querySelector('#validation-input');
// console.dir(inputEl);
const dataLengthEl = inputEl.getAttribute('data-length');
// 1. Добавляет слушателя события addEventListener на элемент inputEl

inputEl.addEventListener('blur', () => {
    inputEl.classList.remove('valid', 'invalid');

    if (inputEl.value.length !== Number(dataLengthEl)) {
        inputEl.classList.toggle('invalid');
    } else {
inputEl.classList.toggle('valid');
    }    
})