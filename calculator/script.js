"use strict";
let inputEl = document.querySelector(".input");
const buttons = document.querySelectorAll(".buttons");
const equalBtn = document.getElementById("equalBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let inputValue = e.target.innerText;
    switch (inputValue) {
      case "AC":
        inputEl.value = "";
        break;
      case "=":
        inputEl.value = eval(inputEl.value);
        break;
      case "<":
        if (inputEl.value) {
          inputEl.value = inputEl.value.slice(0, -1);
        }
        break;

      default:
        inputEl.value += inputValue;
    }
  });
});
