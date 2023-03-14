// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = function ({ rootSelector, initialValue = 0, step = 1, } = {}) {  
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
};

counterValue.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = document.querySelector('[data-action="increment"]');
  refs.decrementBtn = document.querySelector('[data-action="decrement"]');
  refs.value = document.querySelector('#value');
  return refs;
};

counterValue.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log(this);
    this.increment();
    this.updateValueUI();
  });
  this._refs.decrementBtn.addEventListener('click', () => {
    console.log(this);
    this.decrement();
    this.updateValueUI();
  });
};

counterValue.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

counterValue.prototype.increment = function () {
  this._value += this._step;
};

counterValue.prototype.decrement = function () {
  this._value -= this._step;
};

new counterValue({ rootSelector: 'counter', step: 1 });
console.log('counter', counter);