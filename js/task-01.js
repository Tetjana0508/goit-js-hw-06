// 1.

const listEl = document.querySelector('ul#categories');
// console.log('listEl', listEl);

const listLinksEl = listEl.querySelectorAll('li.item');
// console.log('listLinksEl', listLinksEl);

console.log(`Number of categories:`, listLinksEl.length);

// 2.

listLinksEl.forEach((listLinks) => {
  const headerEl = listLinks.querySelector('h2');
  const headerLinksEl = listLinks.querySelectorAll('li');

  console.log(`Category: ${headerEl.textContent}`);
  console.log(`Elements: ${headerLinksEl.length}`);
});

