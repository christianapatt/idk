document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const heartOnEnvelope = document.querySelector('.heart-on-envelope');
    const confession = document.querySelector('.confession');
    const confessionInner = document.querySelector('.confession-inner');
    const floatingHeartsContainer = document.querySelector('.floating-hearts');
    const envelopeWrapper = document.querySelector('.envelope-wrapper');

    // Initial animation for the envelope wrapper
    envelopeWrapper.style.opacity = '0';
    envelopeWrapper.style.transform = 'scale(0.8) translateY(20px)';
    setTimeout(() => {
        envelopeWrapper.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        envelopeWrapper.style.opacity = '1';
        envelopeWrapper.style.transform = 'scale(1) translateY(0)';
    }, 200);

    // Create floating hearts
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖'; // Use a more vibrant heart emoji
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%'; // Start from bottom
        heart.style.fontSize = Math.random() * 25 + 15 + 'px'; // Larger, more varied sizes
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.animation = `float ${Math.random() * 7 + 4}s linear infinite`; // Longer, more varied animation duration
        floatingHeartsContainer.appendChild(heart);

        // Remove heart after animation (if it goes out of view)
        setTimeout(() => {
            heart.remove();
        }, (Math.random() * 7 + 4) * 1000); // Match animation duration
    }

    // Create initial floating hearts
    for (let i = 0; i < 20; i++) {
        createFloatingHeart();
    }

    // Continue creating floating hearts
    setInterval(createFloatingHeart, 400); // Slightly increased interval

    // Heart on envelope click handler
    heartOnEnvelope.addEventListener('click', () => {
        envelope.classList.add('open');
        
        // Animate the heart on envelope disappearing
        heartOnEnvelope.style.opacity = '0';
        heartOnEnvelope.style.transform = 'translate(-50%, -50%) scale(0.2)';

        setTimeout(() => {
            heartOnEnvelope.style.display = 'none';
            // Show the confession after envelope opens
            confession.classList.remove('hidden');
            setTimeout(() => {
                confession.classList.add('show');
            }, 200); // Slight delay for confession after flap opens
        }, 900); // Adjusted to align with envelope flap animation (0.6s + buffer)
    });

    // Confession click handler (for flipping the card)
    confession.addEventListener('click', () => {
        if (confession.classList.contains('show')) { // Only flip if already visible
            confession.classList.add('flipped');
        }
    });
}); 