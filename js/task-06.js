// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputEl = document.querySelector('#validation-input');
// 1. Добавляет слушателя события addEventListener на элемент inputEl
inputEl.addEventListener('blur', () => {
    inputEl.classList.toggle('valid', inputEl.value.length >= 6 );
    inputEl.classList.toggle('invalid', inputEl.value.length < 6 )
})