document.addEventListener('DOMContentLoaded', () => {
    // Create the cursor dot element
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    // Move the dot
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });

    // Add hover effects
    // We select all links AND buttons AND .skill-item
    const interactiveElements = document.querySelectorAll('a, .btn, .skill-item, .project-card');

    interactiveElements.forEach((el) => {
        // When mouse enters, grow the dot
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover-grow');
        });
        // When mouse leaves, shrink it back
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover-grow');
        });
    });
});
