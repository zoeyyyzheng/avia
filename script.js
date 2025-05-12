console.log('Script loading...'); // Debug log

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded'); // Debug log
    
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    console.log('Menu button found:', menuBtn); // Debug log
    console.log('Nav found:', nav); // Debug log
    
    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
            console.log('Toggle menu called from:', event.type); // Debug log
        }
        
        nav.classList.toggle('menu-open');
        navLinks.classList.toggle('active');
        
        const isOpen = nav.classList.contains('menu-open');
        console.log('Menu is now:', isOpen ? 'open' : 'closed'); // Debug log
    }

    // Touch events for mobile
    menuBtn.addEventListener('touchstart', function(e) {
        console.log('Touch start on menu button'); // Debug log
        e.preventDefault(); // Prevent default touch behavior
        toggleMenu(e);
    }, { passive: false });

    // Click event as fallback
    menuBtn.addEventListener('click', function(e) {
        console.log('Click on menu button'); // Debug log
        e.preventDefault();
        toggleMenu(e);
    });

    // Handle menu links
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('Link clicked:', e.target.href); // Debug log
            nav.classList.remove('menu-open');
            navLinks.classList.remove('active');
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

// Add error handling
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.log('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
    return false;
};
