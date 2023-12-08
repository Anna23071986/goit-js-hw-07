"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function destroyBoxes() {
  boxes.innerHTML = "";
}

inputNum.addEventListener("input", () => {
  const num = +inputNum.value;

  createBtn.addEventListener("click", function createBoxes(amount) {
    destroyBoxes();

    for (let i = 0; i < num; i++) {
      if (num >= 1 && num <= 100) {
        const box = document.createElement("div");
        const boxSize = 30 + i * 10;
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.append(box);
      }
    }
    inputNum.value = "";
  });
});

destroyBtn.addEventListener("click", destroyBoxes);
