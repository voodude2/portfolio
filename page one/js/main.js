document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    });
  }

  // Scroll Reveal Animations
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  // Trigger once on load
  revealOnScroll();

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });

  // Stats Counter Animation
  const stats = document.querySelectorAll('.stat-number');
  let started = false;

  const countUp = () => {
    stats.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const prefix = stat.getAttribute('data-prefix') || '';
      const suffix = stat.getAttribute('data-suffix') || '';
      const duration = 2000; 
      const increment = target / (duration / 16); 
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.innerText = prefix + Math.ceil(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          stat.innerText = prefix + target + suffix;
        }
      };
      updateCounter();
    });
  };

  const checkStatsScroll = () => {
    if (!stats.length || started) return;
    const section = document.querySelector('.stats-section');
    if (!section) return;
    
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 50) {
      started = true;
      countUp();
    }
  };

  window.addEventListener('scroll', checkStatsScroll);
  checkStatsScroll();
});
