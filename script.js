// script.js for Chandra Sekhar's Portfolio
// Handles dark/light mode, smooth scroll, form validation, and animations

document.addEventListener('DOMContentLoaded', function () {
  // Dark/Light mode toggle
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  toggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  // Set theme on load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form validation
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      let valid = true;
      form.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value) {
          input.classList.add('border-red-500');
          valid = false;
        } else {
          input.classList.remove('border-red-500');
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  }

  // Animate skill bars
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
    }, 400);
  });
});
