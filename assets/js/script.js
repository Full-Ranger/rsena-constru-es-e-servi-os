// R-SENA Website Logic

// 1. Reveal Animations on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Header Sticky Appearance
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// 4. Project Modal Logic
const modal = document.getElementById("project-modal");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const closeModal = document.querySelector(".close-modal");

portfolioItems.forEach(item => {
    item.addEventListener("click", () => {
        const title = item.getAttribute("data-title");
        const description = item.getAttribute("data-description");
        const location = item.getAttribute("data-location");
        const img = item.getAttribute("data-img");

        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-description").innerText = description;
        document.getElementById("modal-location").innerText = location;
        document.getElementById("modal-img").src = img;

        modal.classList.add("active");
        document.body.classList.add("modal-open");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }
});

// Trigger reveal on load
window.onload = reveal;
