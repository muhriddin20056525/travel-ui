const navList = document.querySelector(".header-list");
const menuButton = document.querySelector("header > button");
const closeButton = document.querySelector(".header-list button");

menuButton.addEventListener("click", () => {
  navList.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navList.classList.remove("active");
});
