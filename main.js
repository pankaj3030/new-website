// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll‑reveal effect
const revealElements = document.querySelectorAll('.section, .service-card, blockquote');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));
