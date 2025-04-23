// Sticky Navbar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (navbar) {
        navbar.classList.toggle("sticky", window.scrollY > 0);
    }
});

// Mobile Menu Toggle
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const classBtn = document.querySelector(".close-btn");

const toggleMenu = () => {
    if (menu) {
        menu.classList.toggle("active");
    }
};

// Check if elements exist before adding event listeners
if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
if (classBtn) classBtn.addEventListener("click", toggleMenu);

document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 1000,
    delay: 400,
    easing: "ease-in-out",
});

// Apply ScrollReveal animations
sr.reveal(".hero-headlines", { origin: "left" });
sr.reveal(".hero-page img", { origin: "right" });
sr.reveal(".about");
sr.reveal(".about h1", { delay: 500 });  // Removed quotes from delay
sr.reveal(".about p", { delay: 700 });
sr.reveal(".about-info", { delay: 1000 });
sr.reveal(".collection h1");  // Fixed class name typo
sr.reveal(".collection-container", { delay: 900 });
sr.reveal(".review h1");
sr.reveal(".review-container", { delay: 800 });
sr.reveal(".callout");
sr.reveal(".contact");
