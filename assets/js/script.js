// R-SENA Website Logic

// 1. Page Switching System
function switchPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-page');
    });

    // Show target section
    const targetSection = document.querySelector(pageId);
    if (targetSection) {
        targetSection.classList.add('active-page');
        window.scrollTo(0, 0);
        
        // Trigger reveal animations for the new "page"
        setTimeout(reveal, 100);
    }

    // Update Nav Active State (Optional but recommended)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === pageId);
    });
}

// 2. Navigation Event Listeners
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Only switch page if it's one of our main sections
        if (['#home', '#historia', '#obras', '#contato'].includes(targetId)) {
            e.preventDefault();
            switchPage(targetId);
        }
    });
});

// 3. Reveal Animations logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50; // Reduced for faster response
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener("scroll", reveal);

// 4. Project Modal & Gallery Logic
const modal = document.getElementById("project-modal");
const closeModal = document.querySelector(".close-modal");
const modalImg = document.getElementById("modal-img");
const modalGallery = document.getElementById("modal-gallery");

document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", () => {
        const title = item.getAttribute("data-title");
        const description = item.getAttribute("data-description");
        const location = item.getAttribute("data-location");
        const mainImg = item.getAttribute("data-img");
        const imagesList = item.getAttribute("data-images") ? item.getAttribute("data-images").split(',') : [mainImg];

        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-description").innerText = description;
        document.getElementById("modal-location").innerText = location;
        modalImg.src = mainImg;

        // Generate Gallery Thumbnails
        modalGallery.innerHTML = ""; // Clear existing
        if (imagesList.length > 1) {
            imagesList.forEach((imgSrc, index) => {
                const thumb = document.createElement("img");
                thumb.src = imgSrc;
                thumb.alt = `${title} view ${index + 1}`;
                if (imgSrc === mainImg) thumb.classList.add('active-thumb');

                thumb.addEventListener("click", () => {
                    modalImg.src = imgSrc;
                    // Update active thumb styling
                    document.querySelectorAll('.modal-gallery img').forEach(t => t.classList.remove('active-thumb'));
                    thumb.classList.add('active-thumb');
                });
                modalGallery.appendChild(thumb);
            });
        }

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

// 5. Initial Page Setup
window.onload = () => {
    // Check URL hash or default to home
    const hash = window.location.hash;
    if (hash && ['#home', '#historia', '#obras', '#contato'].includes(hash)) {
        switchPage(hash);
    } else {
        switchPage('#home');
    }
};
