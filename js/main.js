// =====================================================
// LUKE COLLINS SOUND HEALING - Main JavaScript
// =====================================================

// Stars Animation
class StarField {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.stars = [];
        this.numStars = 200;
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random(),
                speed: Math.random() * 0.5 + 0.1,
                twinkleSpeed: Math.random() * 0.02 + 0.005
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw stars
        this.stars.forEach(star => {
            // Twinkle effect
            star.alpha += star.twinkleSpeed;
            if (star.alpha >= 1 || star.alpha <= 0.5) {
                star.twinkleSpeed *= -1;
            }
            
            // Vary star colors slightly (white, blue-white, warm white)
            const colors = [
                `rgba(255, 255, 255, ${star.alpha})`,
                `rgba(220, 230, 255, ${star.alpha})`,
                `rgba(255, 250, 240, ${star.alpha})`,
                `rgba(200, 220, 255, ${star.alpha})`
            ];
            const colorIndex = Math.floor(star.x + star.y) % colors.length;
            
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = colors[colorIndex];
            this.ctx.fill();
            
            // Add glow to larger stars
            if (star.radius > 1.2) {
                // Outer glow
                this.ctx.beginPath();
                this.ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(200, 180, 255, ${star.alpha * 0.25})`;
                this.ctx.fill();
                
                // Inner glow
                this.ctx.beginPath();
                this.ctx.arc(star.x, star.y, star.radius * 1.5, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.5})`;
                this.ctx.fill();
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Navigation
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.toggle = document.querySelector('.nav-toggle');
        this.menu = document.querySelector('.nav-menu');
        this.links = document.querySelectorAll('.nav-menu a');
        
        this.init();
    }
    
    init() {
        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        });
        
        // Mobile toggle
        this.toggle.addEventListener('click', () => {
            this.toggle.classList.toggle('active');
            this.menu.classList.toggle('active');
        });
        
        // Close menu on link click
        this.links.forEach(link => {
            link.addEventListener('click', () => {
                this.toggle.classList.remove('active');
                this.menu.classList.remove('active');
            });
        });
        
        // Reset mobile menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.toggle.classList.remove('active');
                this.menu.classList.remove('active');
            }
        });
    }
}

// Smooth reveal animations
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.section, .service-card, .event-card, .testimonial');
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        this.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Banner Slideshow
class BannerSlideshow {
    constructor() {
        this.slides = document.querySelectorAll('.banner-slide');
        this.dots = document.querySelectorAll('.banner-dots .dot');
        this.prevBtn = document.querySelector('.banner-prev');
        this.nextBtn = document.querySelector('.banner-next');
        this.currentSlide = 0;
        this.interval = null;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Auto-rotate every 5 seconds
        this.startAutoRotate();
        
        // Click handlers for dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoRotate();
            });
        });
        
        // Click handlers for arrows
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetAutoRotate();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoRotate();
            });
        }
    }
    
    goToSlide(index) {
        // Remove active from current
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Set new current
        this.currentSlide = index;
        
        // Add active to new
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }
    
    startAutoRotate() {
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }
    
    resetAutoRotate() {
        clearInterval(this.interval);
        this.startAutoRotate();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const starsCanvas = document.getElementById('stars-canvas');
    if (starsCanvas) {
        new StarField(starsCanvas);
    }
    
    new Navigation();
    new ScrollReveal();
    new BannerSlideshow();
    
    console.log('✨ Luke Collins Sound Healing - Site Loaded');
});
