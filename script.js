document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    // Prevent any default touch behaviors that might interfere
    nav.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Toggle menu on button click/touch
    function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.toggle('menu-open');
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('menu-open');
    }

    // Add both click and touch events for better iOS support
    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileMenuBtn.addEventListener('touchend', toggleMenu);

    // Close menu when clicking/touching a link
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            document.body.classList.remove('menu-open');
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('menu-open');
            // Navigate after menu closes
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });

    // Close menu when clicking/touching outside
    document.addEventListener('click', function(e) {
        if (document.body.classList.contains('menu-open') && !e.target.closest('nav')) {
            document.body.classList.remove('menu-open');
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
