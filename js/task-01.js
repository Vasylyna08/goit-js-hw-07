const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);
item.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
