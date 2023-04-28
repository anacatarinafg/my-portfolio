const navbar = document.querySelector("#navbar");
const openNavbar = document.querySelector("#navbar__button");
const closeNavbar = document.querySelector("#navbar__closeButton");

openNavbar.addEventListener("click", () => {
  navbar.classList.add("visible");
});

closeNavbar.addEventListener("click", () => {
  navbar.classList.remove("visible");
});
