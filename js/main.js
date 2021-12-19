const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu_large ul");

burger.addEventListener("click", function () {
    menu.classList.toggle('visible');
});

console.log(burger);