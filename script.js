document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling to document
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
        nav.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    navLinks.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('menu-open');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('menu-open');
        }
    });

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinkElements = document.querySelectorAll('.nav-links a');
    navLinkElements.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
