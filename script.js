document.addEventListener("DOMContentLoaded", () => {
    
    // --- SCROLL REVEAL ANIMATION ENGINE ---
    // This utilizes the Intersection Observer API for smooth, performance-optimized visual reveals when scrolling down
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if element is arriving on screen view
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once animated into view to preserve processing power
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Triggers animation when 15% of the element is visible
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });


    // --- DYNAMIC NAV BLUR BAR EFFECT ---
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 8%";
            navbar.style.background = "rgba(10, 10, 10, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.padding = "20px 8%";
            navbar.style.background = "rgba(10, 10, 10, 0.85)";
            navbar.style.boxShadow = "none";
        }
    });

});