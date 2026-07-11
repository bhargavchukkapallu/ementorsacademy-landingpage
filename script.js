/* ==========================================================================
   E-Mentor's IIT-NEET Academy JS scripts
   Author: Senior Frontend Engineer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setupImageFallbacks();
  setupScrollReveal();
  setupModalAndForm();
});

/**
 * Ensures images load correctly on local preview by falling back to session artifacts
 * if they are not yet copied to the build root folder.
 */
function setupImageFallbacks() {
  const logoImg = document.getElementById('academy-logo');
  const heroImg = document.getElementById('hero-student-img');

  if (logoImg) {
    logoImg.addEventListener('error', function fallbackLogo() {
      // Local session absolute path fallback
      logoImg.src = 'file:///C:/Users/bharg/.gemini/antigravity-ide/brain/92bcac28-97c2-4525-bb90-28182d5084c6/media__1783434018478.png';
      // Remove listener to prevent infinite loops if the fallback path also fails
      logoImg.removeEventListener('error', fallbackLogo);
    });
    // Trigger load check immediately
    if (logoImg.complete && logoImg.naturalWidth === 0) {
      logoImg.dispatchEvent(new Event('error'));
    }
  }

  if (heroImg) {
    heroImg.addEventListener('error', function fallbackHero() {
      // Local session absolute path fallback for generated student image
      heroImg.src = 'file:///C:/Users/bharg/.gemini/antigravity-ide/brain/92bcac28-97c2-4525-bb90-28182d5084c6/hero_student_1783434522155.png';
      heroImg.removeEventListener('error', fallbackHero);
    });
    if (heroImg.complete && heroImg.naturalWidth === 0) {
      heroImg.dispatchEvent(new Event('error'));
    }
  }
}

/**
 * Uses IntersectionObserver to trigger entry animations on scroll
 */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Handles enrollment modal triggers, form validation, and submissions
 */
function setupModalAndForm() {
  // Modal toggle bindings
  const enrollTriggers = document.querySelectorAll('.enroll-trigger-btn');
  const enrollModalEl = document.getElementById('enrollModal');
  
  if (!enrollModalEl) return;
  
  const enrollModal = new bootstrap.Modal(enrollModalEl);
  
  enrollTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      enrollModal.show();
    });
  });

  // Form submission handling
  const enrollForm = document.getElementById('enrollForm');
  const successMsg = document.getElementById('enrollSuccessMsg');

  if (enrollForm && successMsg) {
    enrollForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation check
      if (enrollForm.checkValidity()) {
        // Mock successful data payload logging
        console.log('Registration details:', {
          studentName: document.getElementById('studentName').value,
          studentClass: document.getElementById('studentClass').value,
          parentName: document.getElementById('parentName').value,
          contactNumber: document.getElementById('contactNumber').value,
          timestamp: new Date().toISOString()
        });

        // Show success animation message
        successMsg.classList.remove('d-none');
        enrollForm.style.opacity = '0.5';
        
        // Disable all inputs
        Array.from(enrollForm.elements).forEach(element => {
          element.disabled = true;
        });

        // Auto close modal after 3 seconds and reset
        setTimeout(() => {
          enrollModal.hide();
          
          // Reset form state after modal closes completely
          setTimeout(() => {
            enrollForm.reset();
            enrollForm.style.opacity = '1';
            successMsg.classList.add('d-none');
            Array.from(enrollForm.elements).forEach(element => {
              element.disabled = false;
            });
          }, 400);

        }, 3000);
      }
    });
  }
}
