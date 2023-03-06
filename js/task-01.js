const listEl = document.querySelector('ul#categories');
console.log('listEl', listEl);

const listLinksEl = listEl.querySelectorAll('.item');
console.log('listLinksEl', listLinksEl);

console.log(`Number of categories:`, listLinksEl.length);
