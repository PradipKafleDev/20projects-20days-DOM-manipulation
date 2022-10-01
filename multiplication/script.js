const num1 = Math.trunc(Math.random() * 10 + 1);
const num2 = Math.trunc(Math.random() * 10 + 1);
const formEl = document.getElementById("form");
let score = JSON.parse(localStorage.getItem("score"));
const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}`;
const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
