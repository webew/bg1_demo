const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu_large ul");
let menuMobileVisible = false;

burger.addEventListener("click", function () {
    if (menuMobileVisible) {
        menu.style.display = "none";
    } else {
        // au premier clic, menu.style.display = ""
        menu.style.display = "flex";
    }
    menuMobileVisible = !menuMobileVisible;
});

// burger.addEventListener("click", function() {
//     menu.style.display = menuMobileVisible ? "none" : "flex";
//     menuMobileVisible = !menuMobileVisible;
// });