/**
 * RADIANT DENTAL CARE - INTERACTIVE LOGIC & SINGLE PAGE NAVIGATION
 * Handles Minimalist Navigation, Scroll-Spy, Accordion, Lightbox,
 * In-Page Treatment Modal, Form Validation, and Central Configuration.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Dynamic Configuration
  initClinicData();

  // 2. Navigation & Sticky Header & Scroll-Spy
  initNavigation();
  initScrollSpy();

  // 3. Animated Statistics Counters
  initStatsCounters();

  // 4. Scroll Reveal Animations
  initScrollAnimations();

  // 5. Interactive Before/After Comparison
  initBeforeAfterSlider();

  // 6. Clinic Gallery Lightbox
  initGalleryLightbox();

  // 7. Accessible FAQ Accordion
  initFaqAccordion();

  // 8. In-Page Treatment Modal & Booking Shortcuts
  initTreatmentModal();

  // 9. Appointment Form Validation & Submission
  initAppointmentForm();

  // 10. Legal Modals (Privacy & Terms)
  initLegalModals();

  // 11. Analytics Tracking Setup
  initAnalyticsTracking();
});

/**
 * Hydrates elements with data from CLINIC_CONFIG
 */
function initClinicData() {
  if (typeof CLINIC_CONFIG === 'undefined') return;

  // Set WhatsApp links dynamically
  const whatsappButtons = document.querySelectorAll('[data-action="whatsapp"]');
  const encodedMsg = encodeURIComponent(CLINIC_CONFIG.contact.whatsappDefaultMessage);
  const waUrl = `https://wa.me/${CLINIC_CONFIG.contact.whatsapp}?text=${encodedMsg}`;

  whatsappButtons.forEach(btn => {
    btn.setAttribute('href', waUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // Set Call Now links dynamically
  const callButtons = document.querySelectorAll('[data-action="call"]');
  callButtons.forEach(btn => {
    btn.setAttribute('href', `tel:${CLINIC_CONFIG.contact.phone}`);
  });

  // Set Directions link
  const dirButtons = document.querySelectorAll('[data-action="directions"]');
  dirButtons.forEach(btn => {
    btn.setAttribute('href', CLINIC_CONFIG.contact.googleMapsDirectionsUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // Set Google Reviews link
  const reviewButtons = document.querySelectorAll('[data-action="reviews"]');
  reviewButtons.forEach(btn => {
    btn.setAttribute('href', CLINIC_CONFIG.contact.googleReviewsUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // Set minimum date for appointment input to today
  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
}

/**
 * Sticky Header and Mobile Navigation Menu
 */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-actions .btn');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      toggleMenu(!isExpanded);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  function toggleMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.classList.toggle('active', open);
    mobileNav.classList.toggle('open', open);
    document.body.classList.toggle('no-scroll', open);
  }
}

/**
 * Smooth Active Section Scroll-Spy for Single-Page Navigation
 */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (!navLinks.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '-60px 0px -40% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * In-Page Treatment Modal & Booking Pre-Selection
 */
function initTreatmentModal() {
  const modal = document.getElementById('treatment-modal');
  if (!modal || typeof CLINIC_CONFIG === 'undefined' || !CLINIC_CONFIG.treatments) return;

  const closeBtn = document.getElementById('tm-close');
  const badgeEl = document.getElementById('tm-badge');
  const titleEl = document.getElementById('tm-title');
  const imageEl = document.getElementById('tm-image');
  const durationEl = document.getElementById('tm-duration');
  const recoveryEl = document.getElementById('tm-recovery');
  const descEl = document.getElementById('tm-desc');
  const benefitsEl = document.getElementById('tm-benefits');
  const idealEl = document.getElementById('tm-ideal');
  const bookBtn = document.getElementById('tm-book-btn');
  let activeTreatmentId = null;

  function openTreatment(id) {
    const treatment = CLINIC_CONFIG.treatments.find(t => t.id === id);
    if (!treatment) return;

    activeTreatmentId = treatment.id;
    badgeEl.textContent = treatment.category;
    titleEl.textContent = treatment.title;
    imageEl.src = treatment.image;
    imageEl.alt = treatment.title;
    durationEl.textContent = treatment.duration;
    recoveryEl.textContent = treatment.recovery;
    descEl.textContent = treatment.fullDesc;

    // Benefits
    benefitsEl.innerHTML = treatment.benefits.map(b => `
      <div class="tm-list-item">
        <i class="fa-solid fa-circle-check"></i>
        <span>${b}</span>
      </div>
    `).join('');

    // Ideal Candidates
    idealEl.innerHTML = treatment.idealFor.map(item => `
      <div class="tm-list-item">
        <i class="fa-solid fa-user-check" style="color: var(--color-cta);"></i>
        <span>${item}</span>
      </div>
    `).join('');

    modal.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  // Trigger buttons
  document.querySelectorAll('.view-treatment-btn, .footer-treatment-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-treatment-id');
      if (id) openTreatment(id);
    });
  });

  // Book shortcut buttons on cards
  document.querySelectorAll('.book-shortcut-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const treatmentId = btn.getAttribute('data-treatment');
      preselectTreatment(treatmentId);
    });
  });

  // Book button inside modal
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      closeModal();
      if (activeTreatmentId) {
        preselectTreatment(activeTreatmentId);
      }
      const appointmentSec = document.getElementById('appointment');
      if (appointmentSec) {
        appointmentSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function preselectTreatment(id) {
    const selectEl = document.getElementById('patient-treatment');
    if (selectEl && id) {
      selectEl.value = id;
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Animated statistics counters with IntersectionObserver
 */
function initStatsCounters() {
  const statNumbers = document.querySelectorAll('.trust-number[data-target]');
  if (!statNumbers.length) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * easeOut;

          if (isDecimal) {
            el.querySelector('.counter-val').textContent = currentVal.toFixed(1);
          } else {
            el.querySelector('.counter-val').textContent = Math.floor(currentVal).toLocaleString();
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            if (isDecimal) {
              el.querySelector('.counter-val').textContent = target.toFixed(1);
            } else {
              el.querySelector('.counter-val').textContent = target.toLocaleString();
            }
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, observerOptions);

  statNumbers.forEach(el => observer.observe(el));
}

/**
 * Scroll reveal animations with IntersectionObserver
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * Interactive Before & After comparison slider with Multi-Case Tabs, Auto-Animation, and User Self-Control
 */
function initBeforeAfterSlider() {
  const casePanels = document.querySelectorAll('.results-case-panel');
  const tabButtons = document.querySelectorAll('.results-tab-btn');

  if (!casePanels.length) return;

  // Track global auto-play state (defaults to manual drag control for visitor)
  let isAutoPlaying = false;
  let autoAnimId = null;
  let animStartTime = null;
  let basePosition = 50;

  // Function to get currently active case panel
  function getActivePanel() {
    return document.querySelector('.results-case-panel.active') || casePanels[0];
  }

  // Update position on a specific container
  function updateContainerPosition(container, percent, updateRange = true) {
    if (!container) return;
    const clamped = Math.max(0, Math.min(100, percent));
    container.style.setProperty('--pos', `${clamped}%`);
    container.setAttribute('aria-valuenow', Math.round(clamped));

    if (updateRange) {
      const range = container.querySelector('.slider-range-input');
      if (range && document.activeElement !== range) {
        range.value = clamped;
      }
    }

    // Update preset buttons state
    const panel = container.closest('.results-case-panel');
    if (panel) {
      const presetBtns = panel.querySelectorAll('.slider-preset-btn');
      presetBtns.forEach(btn => {
        const val = parseFloat(btn.getAttribute('data-preset'));
        if (Math.abs(val - clamped) < 2) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  // Update auto-play button UI across panels
  function updateAutoButtonsUI() {
    const autoBtns = document.querySelectorAll('.slider-btn-auto');
    autoBtns.forEach(btn => {
      if (isAutoPlaying) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Auto Compare: <strong>ON</strong></span>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Auto Compare: <strong>OFF</strong></span>';
      }
    });
  }

  // Auto-animation loop function
  function startAutoAnimation() {
    if (!isAutoPlaying) return;
    cancelAnimationFrame(autoAnimId);
    animStartTime = null;

    function step(timestamp) {
      if (!isAutoPlaying) return;
      if (!animStartTime) animStartTime = timestamp;
      const elapsed = timestamp - animStartTime;

      // Gentle oscillation between 20% and 80% (period: 3.5s)
      const period = 3500;
      const wave = Math.sin((elapsed / period) * Math.PI * 2);
      const pos = 50 + wave * 32;

      const activePanel = getActivePanel();
      if (activePanel) {
        const activeContainer = activePanel.querySelector('.before-after-interactive');
        if (activeContainer) {
          updateContainerPosition(activeContainer, pos, true);
        }
      }

      autoAnimId = requestAnimationFrame(step);
    }

    autoAnimId = requestAnimationFrame(step);
  }

  function pauseAutoAnimation() {
    isAutoPlaying = false;
    cancelAnimationFrame(autoAnimId);
    updateAutoButtonsUI();
  }

  function resumeAutoAnimation() {
    isAutoPlaying = true;
    updateAutoButtonsUI();
    startAutoAnimation();
  }

  // Setup each case panel
  casePanels.forEach(panel => {
    const container = panel.querySelector('.before-after-interactive');
    if (!container) return;

    const rangeInput = container.querySelector('.slider-range-input');
    const autoToggleBtn = panel.querySelector('.slider-btn-auto');
    const presetBtns = panel.querySelectorAll('.slider-preset-btn');
    let isDragging = false;

    // Set initial 50%
    updateContainerPosition(container, 50);

    function handlePointerCoord(clientX) {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0) return;
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      updateContainerPosition(container, percent);
      container.classList.add('user-interacted');
    }

    // Direct cursor movement (Hover self-control)
    container.addEventListener('mousemove', (e) => {
      // Pause auto animation on user hover/interaction so they control it
      if (isAutoPlaying) {
        pauseAutoAnimation();
      }
      handlePointerCoord(e.clientX);
    });

    // Pointer down / drag
    container.addEventListener('pointerdown', (e) => {
      if (isAutoPlaying) pauseAutoAnimation();
      isDragging = true;
      container.classList.add('is-dragging');
      handlePointerCoord(e.clientX);
      try {
        container.setPointerCapture(e.pointerId);
      } catch (err) {}
    });

    container.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      handlePointerCoord(e.clientX);
    });

    const stopDragging = (e) => {
      if (isDragging) {
        isDragging = false;
        container.classList.remove('is-dragging');
        try {
          if (e.pointerId && container.hasPointerCapture(e.pointerId)) {
            container.releasePointerCapture(e.pointerId);
          }
        } catch (err) {}
      }
    };

    container.addEventListener('pointerup', stopDragging);
    container.addEventListener('pointercancel', stopDragging);

    // Touch support for mobile
    container.addEventListener('touchstart', (e) => {
      if (isAutoPlaying) pauseAutoAnimation();
      isDragging = true;
      if (e.touches[0]) handlePointerCoord(e.touches[0].clientX);
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (e.touches[0]) handlePointerCoord(e.touches[0].clientX);
    }, { passive: true });

    container.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Keyboard accessibility for Arrow keys
    container.addEventListener('keydown', (e) => {
      let currentPos = parseFloat(container.style.getPropertyValue('--pos') || '50');
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pauseAutoAnimation();
        updateContainerPosition(container, currentPos - 3);
        container.classList.add('user-interacted');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        pauseAutoAnimation();
        updateContainerPosition(container, currentPos + 3);
        container.classList.add('user-interacted');
      } else if (e.key === 'Home') {
        e.preventDefault();
        pauseAutoAnimation();
        updateContainerPosition(container, 0);
        container.classList.add('user-interacted');
      } else if (e.key === 'End') {
        e.preventDefault();
        pauseAutoAnimation();
        updateContainerPosition(container, 100);
        container.classList.add('user-interacted');
      }
    });

    // Range input accessibility
    if (rangeInput) {
      rangeInput.addEventListener('input', (e) => {
        if (isAutoPlaying) pauseAutoAnimation();
        updateContainerPosition(container, parseFloat(e.target.value));
        container.classList.add('user-interacted');
      });
    }

    // Preset buttons (Before 100%, 50/50, After 0%)
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (isAutoPlaying) pauseAutoAnimation();
        const targetPercent = parseFloat(btn.getAttribute('data-preset'));
        updateContainerPosition(container, targetPercent);
        container.classList.add('user-interacted');
      });
    });

    // Auto Toggle Button
    if (autoToggleBtn) {
      autoToggleBtn.addEventListener('click', () => {
        if (isAutoPlaying) {
          pauseAutoAnimation();
        } else {
          resumeAutoAnimation();
        }
      });
    }
  });

  // Tab switching logic
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      casePanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.hidden = false;
          panel.classList.add('active');
          const panelSlider = panel.querySelector('.before-after-interactive');
          if (panelSlider) {
            updateContainerPosition(panelSlider, 50);
          }
        } else {
          panel.classList.remove('active');
          panel.hidden = true;
        }
      });

      // Restart auto loop seamlessly on the newly selected tab
      if (isAutoPlaying) {
        startAutoAnimation();
      }
    });
  });

  // Start auto comparison loop initially
  startAutoAnimation();
}

/**
 * Gallery Lightbox Modal
 */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || '';
      
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
        if (lightboxCaption) {
          lightboxCaption.textContent = title;
        }
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/**
 * Accessible FAQ Accordion
 */
function initFaqAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');
      const body = item.querySelector('.accordion-body');

      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.accordion-body').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = `${body.scrollHeight + 30}px`;
      }
    });
  });
}

/**
 * Appointment Form Validation & Submission
 */
function initAppointmentForm() {
  const form = document.getElementById('appointment-form');
  const successBox = document.getElementById('appointment-success');
  const bookAnotherBtn = document.getElementById('book-another-btn');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => input.classList.remove('is-invalid'));
    document.querySelectorAll('.form-error-msg').forEach(msg => msg.classList.remove('visible'));

    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById('patient-name');
    const nameVal = nameInput ? nameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 2) {
      showError(nameInput, 'name-error', 'Please enter your full name (minimum 2 characters).');
      isValid = false;
    }

    // Validate Phone (10-digit standard)
    const phoneInput = document.getElementById('patient-phone');
    const phoneVal = phoneInput ? phoneInput.value.trim().replace(/[\s\-()]/g, '') : '';
    const phoneRegex = /^(\+?\d{1,4})?\d{10}$/;
    if (!phoneVal || !phoneRegex.test(phoneVal)) {
      showError(phoneInput, 'phone-error', 'Please enter a valid phone number (e.g. 075687 54898).');
      isValid = false;
    }

    // Validate Treatment
    const treatmentSelect = document.getElementById('patient-treatment');
    if (treatmentSelect && !treatmentSelect.value) {
      showError(treatmentSelect, 'treatment-error', 'Please select a treatment or inquiry type.');
      isValid = false;
    }

    // Validate Preferred Date
    const dateInput = document.getElementById('preferred-date');
    if (dateInput && dateInput.value) {
      const selectedDate = new Date(dateInput.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        showError(dateInput, 'date-error', 'Please select a future date.');
        isValid = false;
      }
    }

    if (!isValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Process Form (Simulated API call)
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Confirming Request...';

    trackEvent('appointment_form_submit', {
      treatment: treatmentSelect ? treatmentSelect.value : 'General',
      hasDate: !!(dateInput && dateInput.value)
    });

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const timeInput = document.getElementById('preferred-time');
      const timeVal = timeInput ? timeInput.value : '';
      const dateVal = dateInput ? dateInput.value : '';
      const treatVal = treatmentSelect ? treatmentSelect.options[treatmentSelect.selectedIndex].text : '';

      const waFollowUpBtn = document.getElementById('success-wa-link');
      if (waFollowUpBtn && typeof CLINIC_CONFIG !== 'undefined') {
        const customWaMsg = `Hello Dr. Kalpit Kumar, I just submitted an appointment request for ${nameVal} for ${treatVal}${dateVal ? ' on ' + dateVal : ''}${timeVal ? ' around ' + timeVal : ''} at Radiant Dental Care. Kindly confirm my booking.`;
        waFollowUpBtn.href = `https://wa.me/${CLINIC_CONFIG.contact.whatsapp}?text=${encodeURIComponent(customWaMsg)}`;
      }

      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('active');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 850);
  });

  if (bookAnotherBtn) {
    bookAnotherBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      if (successBox) successBox.classList.remove('active');
    });
  }

  function showError(inputElement, errorId, message) {
    if (!inputElement) return;
    inputElement.classList.add('is-invalid');
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
  }
}

/**
 * Legal Modals (Privacy Policy and Terms of Service)
 */
function initLegalModals() {
  const privacyLinks = document.querySelectorAll('[data-modal="privacy"]');
  const termsLinks = document.querySelectorAll('[data-modal="terms"]');
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');
  const modalCloses = document.querySelectorAll('.legal-modal-close');

  privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (privacyModal) openModal(privacyModal);
    });
  });

  termsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (termsModal) openModal(termsModal);
    });
  });

  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  document.querySelectorAll('.legal-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  function openModal(modal) {
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeAllModals() {
    document.querySelectorAll('.legal-modal, .treatment-modal').forEach(m => m.classList.remove('active'));
    document.body.classList.remove('no-scroll');
  }
}

/**
 * Conversion & Analytics Event Tracking Helper
 */
function initAnalyticsTracking() {
  document.querySelectorAll('[data-action="call"]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('call_button_click', {
        location: btn.getAttribute('data-tracking-location') || 'unknown'
      });
    });
  });

  document.querySelectorAll('[data-action="whatsapp"]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('whatsapp_button_click', {
        location: btn.getAttribute('data-tracking-location') || 'unknown'
      });
    });
  });

  document.querySelectorAll('[data-action="directions"]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('get_directions_click', {
        source: 'contact_section'
      });
    });
  });

  document.querySelectorAll('[data-action="inquiry"]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('inquiry_button_click', {
        location: btn.getAttribute('data-tracking-location') || 'unknown'
      });
    });
  });
}

function trackEvent(eventName, eventParams = {}) {
  const customEvt = new CustomEvent('clinic_analytics', {
    detail: { event: eventName, ...eventParams, timestamp: new Date().toISOString() }
  });
  window.dispatchEvent(customEvt);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  console.log(`[Analytics Tracked]: ${eventName}`, eventParams);
}
