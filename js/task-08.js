/*
1 Напиши скрипт управления формой логина.
2 Обработка отправки формы form.login-form должна быть по событию submit.
3 При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
5 Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/

const form = document.querySelector('.login-form'); /*ссылка на форму */

form.addEventListener('submit', handleSubmit); /*отправка формы (submit) и ссылка на внешнюю функцию (handleSubmit)*/

function handleSubmit(event) {
  event.preventDefault(); /* метод preventDefault предотврощает перезагрузку страницы по умолчанию */
  
  const formElements = event.currentTarget.elements; /* свойство currentTarget на объекте событий ссылается на форму, а elements - это все элементы нашей формы */
  // console.dir(formElements);
  const mail = formElements.email.value; /* email - ссылка на элемент в elements, и его value значение (логин) */
  const password = formElements.password.value; /* email - ссылка на элемент в elements, и его value значение (пароль) */
  const formData = { /* отправка формы на сервер */
    mail, password,
  };
  // console.log('email: ', mail);
  // console.log('password: ', password);
  console.log(formData);

  // const formData = new FormData(event.currentTarget); /* создаем новый экземпляр formData, при вызове аргумента мы передаем ссылку на фомру(ДОМ узел) и собирает все значения */
  // console.log(formData);
  // formData.forEach((value, name) => { /* собирает: 1й параметр - значение; 2й параметр - имя */
  //   console.log("value: ", value);
  //   console.log("name: ", name);
  // });

  if (mail === '' || password === '') {
    window.alert('Please fill in all the fields!'); /* если одно из полей не заполнено, выдает уведомление */
  }
  event.target.reset() /* Выводит обьект с введенными данными в консоль и очищает значения полей формы методом reset */
}