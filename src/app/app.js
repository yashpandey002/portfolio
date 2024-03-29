'use strict';

// Smooth scrolling animation
const allLinks = document.querySelectorAll('.local-link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(href);

        // Scroll back to top
        if (href == '#')
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        if (href != '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            // console.log(sectionEl);
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }

        if (link.classList.contains('main-nav-link'))
            headerEl.classList.toggle('nav-open');
    });
});

const emailBtn = document.querySelector('.contact__email');

emailBtn.addEventListener('click', () => {
    const emailCta = document.querySelector('.contact__email-cta');
    const email = 'pandeyyash002@gmail.com';
    navigator.clipboard.writeText(email);
    emailCta.textContent = 'Email copied';
});
