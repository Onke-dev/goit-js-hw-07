const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = value;
  }
});
