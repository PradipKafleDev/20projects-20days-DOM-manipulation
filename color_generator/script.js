//creating 30 new container
const containerEl = document.querySelector(".container");
for (index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}
//selecting all the color container
const colorContainerEls = document.querySelectorAll(".color-container");

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = newColorCode;
    colorContainerEl.innerText = newColorCode;
  });
}
generateColors();

//creating random color using math function
function randomColor() {
  const chars = "0123456789abcdef";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomNum];
  }
  return colorCode;
}
