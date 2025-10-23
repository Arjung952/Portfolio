document.addEventListener('DOMContentLoaded', () => {

    // ==================================================
    // 1. Custom Cursor
    // ==================================================
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll('a, .btn, .skill-item, .project-card');

    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover-grow');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover-grow');
        });
    });

    // ==================================================
    // 2. Nav Shadow on Scroll
    // ==================================================
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add shadow after scrolling 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==================================================
    // 3. Fade-in on Scroll
    // ==================================================
    
    // Create an "observer"
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // If the element is on screen, add the 'fade-in' class
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Tell the observer to watch all elements with the 'hidden' class
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});
