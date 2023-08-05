const slider = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

slider.addEventListener("input", () => {
  span.style.fontSize = `${slider.value}px`;
});
