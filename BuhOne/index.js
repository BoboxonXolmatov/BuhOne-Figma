$(document).ready(function () {
  const burger = document.querySelector('.burger-icon')
const menu = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
  burger.classList.toggle("open");
});
})
