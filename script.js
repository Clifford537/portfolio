// Add click event listeners to project cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Remove highlight class from all cards
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('highlight');
        });
        // Highlight the clicked card
        this.classList.add('highlight');
        // Add glow effect to the body
        document.body.classList.add('glow');
        // Remove glow effect after 1 second
        setTimeout(() => {
            document.body.classList.remove('glow');
        }, 1000);
    });
});
