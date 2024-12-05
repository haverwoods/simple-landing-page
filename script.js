document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Add click event to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .hero-cta, .course-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! This feature is coming soon.');
        });
    });
    
        // Testimonial Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        const prevButton = document.querySelector('.testimonial-nav .prev');
        const nextButton = document.querySelector('.testimonial-nav .next');
    
        function showSlide(n) {
            slides[currentSlide].style.display = 'none';
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
        }
    
        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
    
        showSlide(0);
    
        // Placement Partner Logo Animation
        const partnerLogos = document.querySelectorAll('.partner-logos img');
        
        function animateLogos() {
            partnerLogos.forEach((logo, index) => {
                setTimeout(() => {
                    logo.style.opacity = '1';
                    logo.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    
        // Use Intersection Observer to trigger animation when the section is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateLogos();
                observer.unobserve(entries[0].target);
            }
        });
    
        observer.observe(document.querySelector('.placement-partners'));
    
        const mentorCards = document.querySelectorAll('.mentor-card');

        mentorCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.querySelector('.mentor-info').classList.add('visible');
            });
        
            card.addEventListener('mouseout', () => {
                card.querySelector('.mentor-info').classList.remove('visible');
            });
        });
        
    });
