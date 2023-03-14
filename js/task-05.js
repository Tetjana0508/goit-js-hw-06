// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', onInputSubmit);

function onInputSubmit(event) {
  outputEl.textContent = event.currentTarget.value.trim();
  if (outputEl.textContent.length === 0) {
    outputEl.textContent = 'Anonymous';
  }
}