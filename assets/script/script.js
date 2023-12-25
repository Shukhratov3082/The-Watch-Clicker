const burger = document.querySelector(".burger"),
    nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    nav.classList.toggle("show")
})