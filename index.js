const navslide = () => {
    const burger = document.querySelector(".hamburger-icon");
    const links = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links li");
    const unactive = document.querySelector(".unactive");


    burger.addEventListener("click", () => {
        //Toggle burger
        links.classList.toggle("nav-active");
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksfade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
};

navslide();


// // Javascript for Hero/Nav section assigned to Juliet
// const overlayMenu = document.querySelector(".links");
// const toggleMenu = () => {
//   hamburger-icon.classList.toggle("nav-active");
// };