const aboutUs = document.getElementById("about-us");
const navBar = document.getElementById("nav-bar");

aboutUs.style.color = "red";

navBar.addEventListener("click", () => {
    const colors = ["red", "blue", "green"];
    navBar.style.backgroundColor = colors[Math.floor(Math.random() * 3)];
});