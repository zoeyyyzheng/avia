console.log('Script loading...'); // Debug log

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    let isAnimating = false;

    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        console.log('Menu toggle clicked');
        console.log('Before toggle - nav-links visibility:', navLinks.style.display);

        // Simple toggle of active class
        navLinks.classList.toggle('active');
        
        // Also toggle menu-open class on nav for hamburger animation
        nav.classList.toggle('menu-open');
        
        // Prevent body scroll when menu is open
        const isMenuOpen = navLinks.classList.contains('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        document.body.classList.toggle('menu-open', isMenuOpen);

        console.log('After toggle - nav-links visibility:', navLinks.style.display);
        console.log('Menu is now:', isMenuOpen ? 'open' : 'closed'); // Match the CSS transition duration
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
