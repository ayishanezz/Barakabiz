// =====================
// Navigation Functionality
// =====================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// CTA Button Functionality
// =====================

const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        
        // "Get Started" or "Learn More" navigation
        if (buttonText.includes('Get Started')) {
            window.location.href = '#contact';
        } else if (buttonText.includes('Learn More')) {
            window.location.href = '#about';
        } else if (buttonText.includes('Contact')) {
            handleContactClick();
        }
    });
});

// =====================
// Contact Handler
// =====================

function handleContactClick() {
    // Placeholder for contact functionality
    alert('Contact form will be available soon. Please email us for inquiries.');
    // In a real implementation, this would open a modal or redirect to a contact form
}

// =====================
// Navbar Sticky Behavior Enhancement
// =====================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// =====================
// Add Animation on Scroll
// =====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and items for animation
document.querySelectorAll('.about-card, .product-card, .service-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// =====================
// CSS Animation Injection
// =====================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// =====================
// Mobile Menu Handling (Future Enhancement)
// =====================

// This is a placeholder for future mobile menu implementation
function initMobileMenu() {
    // Add mobile menu toggle logic here when needed
    const navLinks = document.querySelector('.nav-links');
    
    if (navLinks) {
        // Menu toggle functionality can be added here
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    console.log('Baraka Biz website loaded successfully');
});

// =====================
// Form Submission Handler (Future)
// =====================

function handleFormSubmit(event) {
    event.preventDefault();
    // Add form submission logic here
    alert('Thank you for your inquiry! We will contact you soon.');
}

// =====================
// Analytics Hook (Optional)
// =====================

function trackEvent(eventName, eventData) {
    // Placeholder for analytics
    console.log('Event tracked:', eventName, eventData);
    // In production, this would send data to an analytics service
}