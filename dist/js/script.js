const menu = document.querySelector(".js-menu");
const button = document.querySelector(".js-btnMenu");
button.addEventListener("click", () => {
  menu.classList.toggle("menu_isOpen");
  button.classList.toggle("btnMenu_isOn");
});