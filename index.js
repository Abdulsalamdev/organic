// control for hambuger menu
const hamburger = document.querySelector(".hambuger");
const ul = document.querySelector(".open");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("shower");
});
