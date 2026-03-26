// ===================== PARTICLES.JS INITIALIZATION =====================
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#00d9ff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00d9ff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// ===================== AOS INITIALIZATION =====================
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// ===================== TYPING ANIMATION =====================
document.addEventListener('DOMContentLoaded', function () {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const texts = [
    'VLSI Engineer',
    'FPGA Developer',
    'RISC-V Architect',
    'GPU Programmer',
    'SoC Designer'
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 2000;

  function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
      } else {
        setTimeout(typeText, deletingSpeed);
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, delayBetweenTexts);
      } else {
        setTimeout(typeText, typingSpeed);
      }
    }
  }

  typeText();
});

// ===================== NAVBAR SCROLL EFFECT =====================
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===================== SMOOTH SCROLLING FOR NAV LINKS =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// ===================== HAMBURGER MENU =====================
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (!hamburger) return;

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});

// ===================== ACTIVE NAV LINK ON SCROLL =====================
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===================== SCROLL TO TOP BUTTON =====================
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    if (!document.querySelector('.scroll-to-top')) {
      const scrollBtn = document.createElement('button');
      scrollBtn.className = 'scroll-to-top';
      scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
      
      scrollBtn.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
      
      document.body.appendChild(scrollBtn);
      
      // Add styles dynamically
      const style = document.createElement('style');
      style.innerHTML = `
        .scroll-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #00d9ff 0%, #0099bb 100%);
          color: #0a0e27;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
          transition: all 0.3s ease;
          z-index: 999;
          animation: fadeInUp 0.6s ease;
        }
        
        .scroll-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 40px rgba(0, 217, 255, 0.5);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `;
      document.head.appendChild(style);
    }
  } else {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
      scrollBtn.remove();
    }
  }
});

// ===================== COUNTER ANIMATION =====================
function animateCounters() {
  const statCards = document.querySelectorAll('.stat-card h3');
  const speed = 500;

  statCards.forEach(card => {
    const finalValue = card.textContent;
    let currentValue = 0;

    // Extract numeric value
    const numericValue = parseFloat(finalValue);
    if (isNaN(numericValue)) return;

    const increment = numericValue / (speed / 16);

    function updateCounter() {
      currentValue += increment;
      if (currentValue < numericValue) {
        card.textContent = currentValue.toFixed(2);
        requestAnimationFrame(updateCounter);
      } else {
        card.textContent = finalValue;
      }
    }

    updateCounter();
  });
}

// Trigger counter animation when stats section is in view
window.addEventListener('scroll', function () {
  const statsSection = document.querySelector('.about-stats');
  if (!statsSection) return;

  const rect = statsSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight && !statsSection.dataset.animated) {
    statsSection.dataset.animated = 'true';
    animateCounters();
  }
});

// ===================== PROJECT CARD CLICK HANDLER =====================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
});

// ===================== SKILL TAG ANIMATION =====================
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
  tag.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s forwards`;
  tag.style.opacity = '0';
});

// ===================== INTERSECTION OBSERVER FOR LAZY ANIMATIONS =====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .award-card, .experience-card').forEach(el => {
  observer.observe(el);
});

// ===================== FORM SUBMISSION HANDLING =====================
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
      
      // Validate
      if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
});

// ===================== KEYBOARD NAVIGATION =====================
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (navMenu) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  }
});

// ===================== PREVENT LAYOUT SHIFT =====================
document.addEventListener('DOMContentLoaded', function () {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (scrollBarWidth > 0) {
    document.body.style.overflow = 'overlay';
  }
});

// ===================== PERFORMANCE OPTIMIZATION =====================
// Throttle scroll events for better performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const scrollHandler = throttle(function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, 100);

window.addEventListener('scroll', scrollHandler);

console.log('Portfolio loaded successfully! Welcome to Karri Chandra Sekhar\'s Portfolio');
