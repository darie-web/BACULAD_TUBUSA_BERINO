const navbar = document.getElementById("navbar");
const cards = document.querySelectorAll(".portfolio-card");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Navbar shadow
    navbar.classList.toggle("scrolled", scrollY > 20);

    // Active nav link
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
            section.offsetTop <= scrollY + 120 &&
            section.offsetTop + section.offsetHeight > scrollY + 120
        ) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });

    // Card reveal animation
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.classList.add("visible");
        }
    });
});
