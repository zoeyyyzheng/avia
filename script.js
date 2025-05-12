console.log('Script loading...'); // Debug log

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    let isAnimating = false;

    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
        }

        if (isAnimating) return;
        isAnimating = true;

        const isOpening = !nav.classList.contains('menu-open');
        nav.classList.toggle('menu-open');
        navLinks.classList.toggle('active');
        document.body.style.overflow = isOpening ? 'hidden' : '';

        // Reset animation state after transition
        setTimeout(() => {
            isAnimating = false;
        }, 300); // Match the CSS transition duration
    }

    // Handle menu button interactions
    function handleMenuButtonEvent(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    }

    menuBtn.addEventListener('touchstart', handleMenuButtonEvent, { passive: false });
    menuBtn.addEventListener('click', handleMenuButtonEvent);

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('menu-open') && !e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
            toggleMenu();
        }
    });

    // Handle menu links with smooth transitions
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            
            // Start closing animation
            toggleMenu();
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });

    // Set active nav item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Handle errors gracefully
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error:', { message: msg, url, lineNo, columnNo, error });
    return false;
};
