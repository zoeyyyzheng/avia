document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        nav.classList.toggle('menu-open', isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        menuBtn.setAttribute('aria-expanded', isMenuOpen);
    }

    // Handle menu button clicks
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    // Handle menu links
    document.querySelector('.nav-links').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            toggleMenu();
        }
    });

    // Set initial ARIA states
    menuBtn.setAttribute('aria-expanded', 'false');

    // Set active nav item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});
