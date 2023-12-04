"use strict";

const items = document.querySelectorAll(".item");
const quantityOfCategories = `Number of categories: ${items.length}`;

console.log(quantityOfCategories);

items.forEach((item) => {
  const nameOfCategory = `Category: ${item.firstElementChild.textContent}`;
  const quantityOfElements = `Elements: ${item.lastElementChild.children.length}`;

  console.log(nameOfCategory);
  console.log(quantityOfElements);
});
