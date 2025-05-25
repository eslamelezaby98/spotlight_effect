document.addEventListener('DOMContentLoaded', () => {
    const spotlight = document.querySelector('.spotlight');
    let mouseX = 0;
    let mouseY = 0;
    let spotlightSize = 600;
    let targetSize = 600;
    let isHoveringFeature = false;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        // Offset the position to account for cursor head
        mouseX = e.clientX - 5; // Offset for cursor head
        mouseY = e.clientY - 5; // Offset for cursor head

        // Check if hovering over feature items
        const featureItems = document.querySelectorAll('.feature-item');
        isHoveringFeature = false;
        featureItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (mouseX >= rect.left && mouseX <= rect.right &&
                mouseY >= rect.top && mouseY <= rect.bottom) {
                isHoveringFeature = true;
            }
        });

        // Calculate distance from center of screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const distanceFromCenter = Math.sqrt(
            Math.pow(mouseX - centerX, 2) +
            Math.pow(mouseY - centerY, 2)
        );

        // Adjust spotlight size based on hover state and distance
        if (isHoveringFeature) {
            targetSize = 450; // Increased smaller spotlight for features
        } else {
            targetSize = 600 + (distanceFromCenter * 0.1);
        }
    });

    // Smooth animation of spotlight
    function animate() {
        // Update spotlight position directly to mouse position
        spotlight.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

        // Smoothly adjust spotlight size
        spotlightSize += (targetSize - spotlightSize) * 0.2;
        spotlight.style.width = `${spotlightSize}px`;
        spotlight.style.height = `${spotlightSize}px`;

        // Continue animation
        requestAnimationFrame(animate);
    }

    // Add hover effect to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.borderColor = 'var(--accent-color)';
            item.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            item.style.transform = 'translateY(0)';
        });
    });

    // Start animation
    animate();
}); 