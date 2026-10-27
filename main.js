const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const menuIcon = document.querySelector(".menu-icon");

menuButton.addEventListener("click", function () {
  header.classList.toggle("open");

  if (header.classList.contains("open")) {
    menuIcon.src = "/icons/close.svg";
  } else {
    menuIcon.src = "/icons/menu.svg";
  }
});

const button = document.querySelector(".button");
const input = document.querySelector(".input");

if (button) {
  button.addEventListener("click", function () {
    alert("שלום, " + input.value);
  });
}
