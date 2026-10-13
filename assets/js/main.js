/**
 * PORTFOLIO - GLOBAL JAVASCRIPT
 * สาขาสื่อนฤมิต (Creative Media)
 * Functions: Preloader, Theme Toggle, Scroll to Top, Scroll Reveal, Navbar Shrink, Smooth Transitions
 * Author: Chayan Boochayan
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Preloader Handling
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 400);
    });
    // Fallback if load event already fired
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 1500);
  }

  // 2. Dark / Light Mode Switcher with LocalStorage
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  // Event Delegation for Theme Toggle Button (Supports Dynamic Shared Navbar)
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('#themeToggleBtn');
    if (toggleBtn) {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    }
  });

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon';
      } else {
        themeIcon.className = 'fa-solid fa-sun';
      }
    }
  }

  // 3. Navbar Scrolled Shadow & Shrink Effect
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 4. Scroll To Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Scroll Reveal Animation via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 6. Active Navigation Highlight based on current page path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-custom');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 7. Initialize Bootstrap Tooltips if any
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  if (window.bootstrap && bootstrap.Tooltip) {
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }
});

