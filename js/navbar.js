let toggleButton = document.getElementsByClassName("toggle__button")[0];
let navbarLinks = document.getElementsByClassName("navbar__links")[0];

let navbar = document.getElementsByClassName("navbar")[0];

let navbarLink = document.getElementsByClassName("navbar__link");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbar.classList.toggle("active");

  if (
    navbarLinks.classList.contains("active") || 
    navbar.classList.contains("active")
  ) {
    let logotype = document.getElementsByClassName("navbar__logotype")[0];
    let main = document.querySelector("main");

    for (let i = 0; i < navbarLink.length; i++) {
      navbarLink[i].style.display = "flex";
    }
    navbar.style.height = "100vh";
    navbar.style.padding = "1.5em 1.5em";
    logotype.style.display = "none";
    main.style.display = "none";
  } else {
    let navbar = document.getElementsByClassName("navbar")[0];
    let logotype = document.getElementsByClassName("navbar__logotype")[0];
    let main = document.querySelector("main");
    for (let i = 0; i < navbarLink.length; i++) {
      navbarLink[i].style.display = "";
    }
    navbar.style.height = "";
    navbar.style.padding = "";
    logotype.style.display = "";
    main.style.display = "";
  }
});
