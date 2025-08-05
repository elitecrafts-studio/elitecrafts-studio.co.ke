// ============================================
// ELITECRAFTS STUDIO - PROFESSIONAL JAVASCRIPT
// ============================================

// Loading Screen Animation
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  
  // Simulate loading time for better UX
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    // Initialize all other scripts after loading
    initializeApp();
  }, 2000);
});

// Initialize all app functionality
function initializeApp() {
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize scroll effects
  initScrollEffects();
  
  // Initialize dark mode
  initDarkMode();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Initialize typing animation
  initTypingAnimation();
  
  // Initialize particle effects
  initParticleEffects();
  
  // Initialize form enhancements
  initFormEnhancements();
  
  // Initialize performance optimizations
  initPerformanceOptimizations();
  
  console.log('🎉 Elitecrafts Studio initialized successfully!');
}

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach((span, index) => {
        span.style.transform = navLinks.classList.contains('active') 
          ? `rotate(${index === 1 ? 45 : index === 2 ? -45 : 0}deg) translate(${index === 1 ? '5px, 5px' : index === 2 ? '-5px, 5px' : '0, 0'})`
          : 'none';
        span.style.opacity = index === 0 && navLinks.classList.contains('active') ? '0' : '1';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        resetHamburgerMenu(menuToggle);
      }
    });
    
    // Close menu when clicking on nav links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        resetHamburgerMenu(menuToggle);
      });
    });
  }
}

function resetHamburgerMenu(menuToggle) {
  const spans = menuToggle.querySelectorAll('span');
  spans.forEach(span => {
    span.style.transform = 'none';
    span.style.opacity = '1';
  });
}

// ============================================
// ADVANCED SCROLL EFFECTS
// ============================================
function initScrollEffects() {
  const header = document.querySelector('.header-fixed');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  let lastScrollTop = 0;
  
  // Throttle scroll events for better performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScroll, 10);
  });
  
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Header scroll effects
    if (header) {
      if (scrollTop > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Hide/show header on scroll direction
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
    }
    
    // Scroll to top button
    if (scrollToTopBtn) {
      if (scrollTop > 300) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '1';
      } else {
        scrollToTopBtn.style.opacity = '0';
        setTimeout(() => {
          if (scrollTop <= 300) scrollToTopBtn.style.display = 'none';
        }, 300);
      }
    }
    
    // Parallax effects
    parallaxEffect(scrollTop);
    
    lastScrollTop = scrollTop;
  }
  
  // Scroll to top functionality
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Parallax scrolling effect
function parallaxEffect(scrollTop) {
  const parallaxElements = document.querySelectorAll('.hero-particles, .hero-bg, .about-bg, .services-bg, .blog-bg, .contact-bg, .footer-bg');
  
  parallaxElements.forEach((element, index) => {
    if (element) {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrollTop * speed);
      element.style.transform = `translateY(${yPos}px)`;
    }
  });
}

// ============================================
// ENHANCED DARK MODE
// ============================================
function initDarkMode() {
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('elitecrafts-theme');
  if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    updateModeToggleIcon(savedTheme === 'dark');
  }
  
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      
      // Save theme preference
      localStorage.setItem('elitecrafts-theme', isDark ? 'dark' : 'light');
      
      // Update icon with animation
      updateModeToggleIcon(isDark);
      
      // Add ripple effect
      createRippleEffect(modeToggle);
    });
  }
}

function updateModeToggleIcon(isDark) {
  const modeToggle = document.getElementById('modeToggle');
  if (modeToggle) {
    modeToggle.textContent = isDark ? '☀️' : '🌙';
    modeToggle.style.transform = 'scale(0.8)';
    setTimeout(() => {
      modeToggle.style.transform = 'scale(1)';
    }, 150);
  }
}

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================
function initSmoothScrolling() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.header-fixed').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// TYPING ANIMATION FOR HERO
// ============================================
function initTypingAnimation() {
  const heroTitle = document.querySelector('.hero-content h2');
  if (!heroTitle) return;
  
  const originalText = heroTitle.textContent;
  const words = originalText.split(' ');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      heroTitle.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      heroTitle.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let timeout = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentWord.length) {
      timeout = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
    
    // Only show typing effect on first load
    if (wordIndex === 0 || sessionStorage.getItem('hero-animated')) {
      heroTitle.textContent = originalText;
      return;
    }
    
    setTimeout(typeWriter, timeout);
  }
  
  // Start typing animation if not already shown
  if (!sessionStorage.getItem('hero-animated')) {
    heroTitle.textContent = '';
    setTimeout(typeWriter, 1000);
    sessionStorage.setItem('hero-animated', 'true');
  }
}

// ============================================
// PARTICLE EFFECTS
// ============================================
function initParticleEffects() {
  createFloatingParticles();
  createInteractiveParticles();
}

function createFloatingParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 6 + 2}px;
      height: ${Math.random() * 6 + 2}px;
      background: ${Math.random() > 0.5 ? 'rgba(255, 215, 0, 0.6)' : 'rgba(255, 255, 255, 0.4)'};
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      pointer-events: none;
      z-index: 1;
    `;
    hero.appendChild(particle);
  }
}

function createInteractiveParticles() {
  // Mouse trail effect
  let mouseTrail = [];
  const trailLength = 8;
  
  document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (mouseTrail.length > trailLength) {
      mouseTrail.shift();
    }
    
    // Remove old trails
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
    
    // Create trail particle
    if (Math.random() > 0.8) {
      createTrailParticle(e.clientX, e.clientY);
    }
  });
}

function createTrailParticle(x, y) {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    animation: fadeOut 0.6s ease-out forwards;
  `;
  
  document.body.appendChild(particle);
  
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 600);
}

// ============================================
// FORM ENHANCEMENTS
// ============================================
function initFormEnhancements() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    // Add floating label effect
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      // Floating labels
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
      
      // Input validation styling
      input.addEventListener('input', () => {
        validateInput(input);
      });
    });
    
    // Form submission with loading state
    form.addEventListener('submit', handleFormSubmit);
  });
}

function validateInput(input) {
  const isValid = input.checkValidity();
  const formGroup = input.parentElement;
  
  formGroup.classList.toggle('valid', isValid && input.value);
  formGroup.classList.toggle('invalid', !isValid && input.value);
}

function handleFormSubmit(e) {
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"], .submit-btn');
  
  if (submitBtn) {
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form processing (remove this in production)
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }, 2000);
  }
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================
function initPerformanceOptimizations() {
  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
  
  // Preload critical assets
  preloadCriticalAssets();
  
  // Initialize intersection observers for animations
  initScrollAnimations();
}

function preloadCriticalAssets() {
  const criticalImages = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const animateElements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animateElements.forEach(el => observer.observe(el));
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function createRippleEffect(element) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    width: ${size}px;
    height: ${size}px;
    left: ${rect.width / 2 - size / 2}px;
    top: ${rect.height / 2 - size / 2}px;
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Add ripple animation CSS
const rippleCSS = `
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.5);
    }
  }
  
  .floating-particle {
    pointer-events: none;
    z-index: 1;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-20px) rotate(120deg);
    }
    66% {
      transform: translateY(20px) rotate(240deg);
    }
  }
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// ============================================
// EASTER EGGS & FUN FEATURES
// ============================================
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.keyCode);
  
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    activateEasterEgg();
    konamiCode = [];
  }
});

function activateEasterEgg() {
  // Rainbow colors for the logo
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.animation = 'rainbow 2s ease-in-out infinite';
    
    // Add rainbow CSS
    const rainbowCSS = `
      @keyframes rainbow {
        0% { color: #ff0000; }
        16.66% { color: #ff8000; }
        33.33% { color: #ffff00; }
        50% { color: #00ff00; }
        66.66% { color: #0080ff; }
        83.33% { color: #8000ff; }
        100% { color: #ff0000; }
      }
    `;
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = rainbowCSS;
    document.head.appendChild(rainbowStyle);
    
    // Show message
    const message = document.createElement('div');
    message.textContent = '🎉 You found the secret! Elite coding skills activated! 🎉';
    message.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      color: white;
      padding: 15px 30px;
      border-radius: 25px;
      z-index: 10000;
      font-weight: bold;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      animation: bounceIn 0.5s ease-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
      logo.style.animation = '';
      rainbowStyle.remove();
    }, 5000);
  }
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log(`🚀 Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
    }, 0);
  });
}

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when service worker is ready
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(error => console.log('SW registration failed'));
  });
}

console.log('💎 Elitecrafts Studio - Premium JavaScript Loaded');
