/**
 * Shweta Gupta Portfolio – main.js
 * Handles: navbar scroll, mobile menu, hero particles,
 *          counter animation, skill bar animation,
 *          scroll reveal, contact form validation,
 *          active nav highlight, back-to-top button.
 */

(function () {
  'use strict';

  /* ================================================================
     NAVBAR – sticky + scroll class
  ================================================================ */
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ================================================================
     HAMBURGER MENU (mobile)
  ================================================================ */
  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ================================================================
     HERO PARTICLES
  ================================================================ */
  (function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    var count = window.innerWidth < 600 ? 14 : 28;

    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'particle';

      var size = Math.random() * 60 + 20;
      var left = Math.random() * 100;
      var delay = Math.random() * 12;
      var duration = Math.random() * 14 + 14;

      p.style.cssText = [
        'width:'    + size + 'px',
        'height:'   + size + 'px',
        'left:'     + left + '%',
        'bottom: -' + size + 'px',
        'animation-delay:'    + delay + 's',
        'animation-duration:' + duration + 's',
        'opacity: 0'
      ].join(';');

      container.appendChild(p);
    }
  })();

  /* ================================================================
     COUNTER ANIMATION (hero stats)
  ================================================================ */
  var countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;

    var counters = document.querySelectorAll('.stat-num[data-target]');
    if (!counters.length) return;

    // Check if hero section is in view
    var heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    var rect = heroSection.getBoundingClientRect();
    if (rect.top > window.innerHeight) return;

    countersAnimated = true;

    counters.forEach(function (el) {
      var target = parseInt(el.dataset.target, 10);
      var start  = 0;
      var duration = 2000;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(step);
    });
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  // Try immediately in case already visible
  setTimeout(animateCounters, 500);

  /* ================================================================
     SKILL BARS ANIMATION (Intersection Observer)
  ================================================================ */
  var skillsAnimated = false;

  function initSkillBars() {
    var fills = document.querySelectorAll('.skill-fill[data-width]');
    if (!fills.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !skillsAnimated) {
          skillsAnimated = true;
          fills.forEach(function (fill) {
            fill.style.width = fill.dataset.width + '%';
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    var skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
  }

  initSkillBars();

  /* ================================================================
     SCROLL REVEAL
  ================================================================ */
  function initReveal() {
    var revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger: delay based on sibling index within parent
          var siblings = entry.target.parentElement
            ? Array.from(entry.target.parentElement.querySelectorAll('.reveal'))
            : [];
          var idx = siblings.indexOf(entry.target);
          var delay = (idx >= 0 ? idx : 0) * 90;

          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  initReveal();

  /* ================================================================
     ACTIVE NAV LINK HIGHLIGHT (scroll spy)
  ================================================================ */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    var scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var height = section.offsetHeight;
      var id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (a) { a.classList.remove('active'); });
        var active = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ================================================================
     BACK TO TOP BUTTON
  ================================================================ */
  var backToTop = document.getElementById('backToTop');

  function updateBackToTop() {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ================================================================
     CONTACT FORM – client-side validation
  ================================================================ */
  var form        = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;

      // ---- Helper: show/clear errors ----
      function setError(fieldId, errorId, msg) {
        var field = document.getElementById(fieldId);
        var error = document.getElementById(errorId);
        if (!field || !error) return;

        if (msg) {
          field.classList.add('error');
          error.textContent = msg;
          valid = false;
        } else {
          field.classList.remove('error');
          error.textContent = '';
        }
      }

      var name    = document.getElementById('name');
      var email   = document.getElementById('email');
      var subject = document.getElementById('subject');
      var message = document.getElementById('message');

      // Validate name
      if (!name.value.trim()) {
        setError('name', 'nameError', 'Please enter your full name.');
      } else if (name.value.trim().length < 2) {
        setError('name', 'nameError', 'Name must be at least 2 characters.');
      } else {
        setError('name', 'nameError', '');
      }

      // Validate email
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!email.value.trim()) {
        setError('email', 'emailError', 'Please enter your email address.');
      } else if (!emailPattern.test(email.value.trim())) {
        setError('email', 'emailError', 'Please enter a valid email address.');
      } else {
        setError('email', 'emailError', '');
      }

      // Validate subject
      if (!subject.value.trim()) {
        setError('subject', 'subjectError', 'Please enter a subject.');
      } else if (subject.value.trim().length < 4) {
        setError('subject', 'subjectError', 'Subject is too short.');
      } else {
        setError('subject', 'subjectError', '');
      }

      // Validate message
      if (!message.value.trim()) {
        setError('message', 'messageError', 'Please enter your message.');
      } else if (message.value.trim().length < 10) {
        setError('message', 'messageError', 'Message must be at least 10 characters.');
      } else {
        setError('message', 'messageError', '');
      }

      if (!valid) return;

      // Simulate send (no backend)
      var btn = form.querySelector('button[type="submit"]');
      var originalHTML = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin" style="width:18px;height:18px"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Sending…';

      setTimeout(function () {
        btn.disabled = false;
        btn.innerHTML = originalHTML;

        // Reset form fields
        form.reset();
        form.querySelectorAll('.error').forEach(function (el) { el.classList.remove('error'); });

        // Show success message
        if (formSuccess) {
          formSuccess.classList.add('visible');
          setTimeout(function () { formSuccess.classList.remove('visible'); }, 5000);
        }
      }, 1600);
    });

    // Clear validation state on input
    form.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        this.classList.remove('error');
        var errorEl = document.getElementById(this.id + 'Error');
        if (errorEl) errorEl.textContent = '';
      });
    });
  }

  /* ================================================================
     SMOOTH SCROLL for anchor links (fallback for older browsers)
  ================================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80; // navbar height
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ================================================================
     SPINNING LOADER KEYFRAME (injected via JS)
  ================================================================ */
  (function injectSpin() {
    var style = document.createElement('style');
    style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin .9s linear infinite}';
    document.head.appendChild(style);
  })();

})();
