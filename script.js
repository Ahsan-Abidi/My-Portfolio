// THEME SYSTEM
(function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.body.classList.add("light");
    }

    updateIcon();
})();

function toggleTheme() {
    document.body.classList.toggle("light");

    const theme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);

    updateIcon();
}

function updateIcon() {
    const btn = document.getElementById("themeBtn");
    btn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
}

// TYPING
const nameText = "Syed Mohammer Ahsan Abidi";
let i = 0;

function typeName() {
    if (i < nameText.length) {
        document.getElementById("typing").innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeName, 40);
    }
}
typeName();

// ROLE ROTATION
const roles = ["Frontend Developer", "Cybersecurity Enthusiast"];
let r = 0;

setInterval(() => {
    document.getElementById("role-text").textContent = roles[r];
    r = (r + 1) % roles.length;
}, 2000);

// SCROLL TOP
const btn = document.getElementById("topBtn");

window.onscroll = () => {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollTopBtn() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===============================
// SCROLL REVEAL
// ===============================
const reveals = document.querySelectorAll(".card, .project-card");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active", "reveal");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// ACTIVE NAV LINK
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});