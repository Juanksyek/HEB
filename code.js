var toggler = document.querySelector("div.toggle");
var navigation = document.querySelector("navigation");
var backdrop = document.querySelector(".backdrop");

toggler.addEventListener("click", (e) => {
    e.target.classList.toggle("fa-bars");
    e.target.classList.toggle("fa-times");
    navigation.classList.toggle("menu-close");
});

backdrop.addEventListener("click", (e) => {
    navigation.classList.remove("menu-close");
});
