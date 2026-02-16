const body = document.querySelector("body");
const colors = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", handleButton);

function handleButton(e) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colors.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
