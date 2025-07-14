document.addEventListener('DOMContentLoaded', function() {
    // Initialize all slideshows on the page
    const slideshows = document.querySelectorAll('.slideshow');
    
    slideshows.forEach(slideshow => {
        // Skip if already initialized
        if (slideshow.dataset.initialized === 'true') return;
        slideshow.dataset.initialized = 'true';
        
        const slides = slideshow.querySelectorAll('.slide');
        const prevBtn = document.querySelector(`.prev-btn[data-slideshow="${slideshow.id}"]`);
        const nextBtn = document.querySelector(`.next-btn[data-slideshow="${slideshow.id}"]`);
        const indicators = document.querySelectorAll(`.indicator[data-slideshow="${slideshow.id}"]`);        const descriptions = document.querySelectorAll(`.slide-description[data-slideshow="${slideshow.id}"]`);
        
        if (slides.length === 0) return;
        
        let currentSlide = 0;
        
        // Hide all slides first
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
        });
        indicators.forEach(indicator => indicator.classList.remove('active'));
        descriptions.forEach(description => description.classList.remove('active'));
        
        // Show the first slide initially
        slides[0].classList.add('active');
        if (indicators.length > 0) {
            indicators[0].classList.add('active');
        }
        if (descriptions.length > 0) {
            descriptions[0].classList.add('active');
        }
        
        function showSlide(index) {
            // Remove active class from all slides, indicators, and descriptions
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            descriptions.forEach(description => description.classList.remove('active'));
            
            // Add active class to current slide, indicator, and description
            slides[index].classList.add('active');
            if (indicators[index]) {
                indicators[index].classList.add('active');
            }
            if (descriptions[index]) {
                descriptions[index].classList.add('active');
            }
            
            currentSlide = index;
        }
        
        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }
        
        // Event listeners for navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => showSlide(index));
        });
        
        // Keyboard navigation
        slideshow.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                prevSlide();
            }
        });
        
        // Touch/swipe support
        let startX = 0;
        let startY = 0;
        
        slideshow.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches[0]) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
        });
        
        slideshow.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            if (e.changedTouches && e.changedTouches[0]) {
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // Only trigger swipe if horizontal movement is greater than vertical
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        nextSlide(); // Swipe left - next slide
                    } else {
                        prevSlide(); // Swipe right - previous slide
                    }
                }
            }
            
            startX = 0;
            startY = 0;
        });
    });
});
