import "./style.css";

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mainContainer = document.getElementById("main-container");
const menuContainer = document.getElementById("menu-container");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  mainContainer.classList.add("hidden");
  menuContainer.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  closeIcon.classList.add("hidden");
  menuIcon.classList.remove("hidden");
  mainContainer.classList.remove("hidden");
  menuContainer.classList.add("hidden");
});
