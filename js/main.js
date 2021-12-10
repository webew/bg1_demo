const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu_large ul");
let menuMobileVisible = false;

burger.addEventListener("click", () => {
    menu.style.display = menuMobileVisible ? "none" : "block";
    menuMobileVisible = !menuMobileVisible;
});