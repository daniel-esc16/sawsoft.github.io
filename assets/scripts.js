// Sawsoft – Gestión de Taller — micro interactions

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
}

// Reveal-on-scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Video tutorial placeholder: hide overlay when the video file is actually loadable
const tutorialVideo = document.getElementById("tutorialVideo");
const videoPlaceholder = document.getElementById("videoPlaceholder");
if (tutorialVideo && videoPlaceholder) {
    const showPlaceholder = () => videoPlaceholder.classList.remove("hidden");
    const hidePlaceholder = () => videoPlaceholder.classList.add("hidden");

    tutorialVideo.addEventListener("loadeddata", hidePlaceholder);
    tutorialVideo.addEventListener("canplay", hidePlaceholder);
    tutorialVideo.addEventListener("error", showPlaceholder, true);
    const sourceEl = tutorialVideo.querySelector("source");
    if (sourceEl) sourceEl.addEventListener("error", showPlaceholder);
}
