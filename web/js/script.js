document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide div');
    const indicators = document.querySelectorAll('.indicators span');
    const totalSlides = slides.length; // Total number of slides

    // Function to automatically transition between slides every 5 seconds
    function autoSlide() {
        // Calculate which slide to show based on the current index
        const cycleSlides = Math.floor(currentIndex / 3); // Each cycle shows 3 slides

        // If the cycle has moved past the total number of slides, reset to the beginning
        if (cycleSlides >= 1) {
            currentIndex = 0;
        }

        // Show the current slide group (3 slides per group)
        showSlide(currentIndex);

        // Increment the index for the next cycle
        currentIndex++;
    }

    // Function to show a specific slide
    function showSlide(index) {
        const offset = -index * 100; // Set the offset for the translateX effect
        const carouselSlide = document.querySelector('.carousel-slide');

        // Apply the transformation to move the slide
        carouselSlide.style.transform = `translateX(${offset}%)`;

        // Update the indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === index) {
                indicator.classList.add('active');
            }
        });
    }

    // Run auto-slide every 5 seconds
    const autoSlideInterval = setInterval(autoSlide, 3000); // Set interval to 5 seconds
});
