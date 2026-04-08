// Menu Icon Toggle for Mobile
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.querySelector('i').classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll Sections Active Link & Sticky Header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    // Sticky Header
    if (top > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.add('sticky'); // Actually, keep it looking neat or add a subtle diff.
        // Wait, replacing with just an effect
        if (top <= 50) header.classList.remove('sticky');
    }

    // Active link highlighting
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Close mobile menu on scroll
    menuIcon.querySelector('i').classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Scroll Reveal Animations setup using Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // observer.unobserve(entry.target); // Uncomment to play only once
        } else {
            // entry.target.classList.remove('active'); // Remove to allow re-trigger on scroll up
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => {
    scrollObserver.observe(el);
});
