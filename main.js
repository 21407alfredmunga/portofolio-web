// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const navbar = document.getElementById('navbar');
const projectModal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const projectCards = document.querySelectorAll('.project-card');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');

// Project data for modal
const projectData = {
  project1: {
    title: 'COVID-19 Analytics Dashboard',
    description: 'A comprehensive real-time pandemic data visualization dashboard built with Python and Streamlit. Features interactive maps showing infection rates by region, trend analysis with predictive modeling, and detailed statistics with drill-down capabilities. The dashboard processes data from multiple sources including WHO, CDC, and Johns Hopkins University to provide accurate, up-to-date insights.',
    iframeSrc: 'https://your-streamlit-app1.streamlit.app/', // Replace with actual URL
    codeUrl: 'https://github.com/yourusername/covid-dashboard',
    demoUrl: 'https://your-streamlit-app1.streamlit.app/'
  },
  project2: {
    title: 'Stock Market Prediction Tool',
    description: 'An advanced machine learning application for stock market analysis and prediction. Utilizes LSTM neural networks to analyze historical stock data, technical indicators, and market sentiment. Features include risk assessment models, portfolio optimization suggestions, and real-time prediction updates. Built with TensorFlow, Streamlit, and financial data APIs.',
    iframeSrc: 'https://your-streamlit-app2.streamlit.app/', // Replace with actual URL
    codeUrl: 'https://github.com/yourusername/stock-predictor',
    demoUrl: 'https://your-streamlit-app2.streamlit.app/'
  },
  project3: {
    title: 'Climate Change Data Explorer',
    description: 'An interactive web application for exploring global climate change data through beautiful visualizations. Features animated time series of temperature anomalies, CO2 concentration levels, and sea level changes. Includes geographical visualizations showing climate impact by region and interactive charts for detailed data exploration. Built with D3.js and Python data processing.',
    iframeSrc: 'https://your-observable-notebook.observablehq.com/', // Replace with actual URL
    codeUrl: 'https://github.com/yourusername/climate-explorer',
    demoUrl: 'https://your-observable-notebook.observablehq.com/'
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeTheme();
  initializeScrollEffects();
  initializeProjectFilters();
  initializeProjectModals();
  initializeLazyLoading();
  initializeContactForm();
  initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      
      // Update active link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Update active navigation based on scroll position
  window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navbarHeight = navbar.offsetHeight;
  const scrollPosition = window.scrollY + navbarHeight + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLink) navLink.classList.add('active');
    }
  });
}

// Theme functionality
function initializeTheme() {
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
}

// Scroll effects
function initializeScrollEffects() {
  // Navbar background on scroll
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
  });

  // Back to top button
  if (backToTop) {
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY > 500;
      backToTop.classList.toggle('visible', scrolled);
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      const heroHeight = hero.offsetHeight;
      const rate = scrolled * -0.5;
      
      if (scrolled < heroHeight) {
        hero.style.transform = `translateY(${rate}px)`;
      }
    });
  }
}

// Project filtering
function initializeProjectFilters() {
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        const shouldShow = filter === 'all' || categories.includes(filter);
        
        if (shouldShow) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Project modals
function initializeProjectModals() {
  // Open modal
  document.querySelectorAll('.btn-expand').forEach(btn => {
    btn.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  // Close modal on backdrop click
  if (projectModal) {
    projectModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeProjectModal();
      }
    });
  }

  // Close modal on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project || !projectModal) return;

  // Update modal content
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('view-code').href = project.codeUrl;
  document.getElementById('live-demo').href = project.demoUrl;
  
  // Load iframe with lazy loading
  const iframe = document.getElementById('project-iframe');
  iframe.src = project.iframeSrc;
  
  // Show modal
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!projectModal) return;
  
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
  
  // Clear iframe to stop any running processes
  setTimeout(() => {
    const iframe = document.getElementById('project-iframe');
    if (iframe) iframe.src = '';
  }, 300);
}

// Lazy loading for images and iframes
function initializeLazyLoading() {
  // Intersection Observer for lazy loading images
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  // Observe all images with loading="lazy"
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });

  // Intersection Observer for animation triggers
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe elements for animations
  document.querySelectorAll('.project-card, .blog-card, .skill-category, .timeline-item').forEach(el => {
    animationObserver.observe(el);
  });
}

// Contact form
function initializeContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(data.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate form submission (replace with actual form handling)
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      showNotification('Thank you! Your message has been sent successfully.', 'success');
      this.reset();
      
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close">
      <i class="fas fa-times"></i>
    </button>
  `;

  // Add styles for notification
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        padding: 1rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
      }
      .notification-success { border-left: 4px solid #10b981; }
      .notification-error { border-left: 4px solid #ef4444; }
      .notification-info { border-left: 4px solid #3b82f6; }
      .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
      }
      .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        color: #6b7280;
        padding: 0.25rem;
      }
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  // Add to DOM
  document.body.appendChild(notification);

  // Close functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.remove();
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Animations
function initializeAnimations() {
  // Add CSS for animations
  if (!document.getElementById('animation-styles')) {
    const style = document.createElement('style');
    style.id = 'animation-styles';
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
      
      .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .project-card,
      .blog-card,
      .skill-category,
      .timeline-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
      }
      
      .project-card.animate-in,
      .blog-card.animate-in,
      .skill-category.animate-in,
      .timeline-item.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Performance optimizations
const debouncedUpdateNav = debounce(updateActiveNavigation, 10);
const throttledScrollEffects = throttle(() => {
  // Scroll effects that need throttling
}, 16); // ~60fps

window.addEventListener('scroll', debouncedUpdateNav);
window.addEventListener('scroll', throttledScrollEffects);

// Error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
  // Could send error reports to analytics service
});

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Uncomment to register service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered:', registration))
    //   .catch(error => console.log('SW registration failed:', error));
  });
}