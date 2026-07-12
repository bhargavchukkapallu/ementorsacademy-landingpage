class AppHeader extends HTMLElement {
  connectedCallback() {
    let headerContent = '';
    headerContent = `
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <!-- School Logo -->
            <div class="col-7 col-md-6 d-flex align-items-center text-start gap-3">
              <a href="index.html" class="logo-link">
                <img id="academy-logo" src="logo.jpeg" alt="e-mentor's Academy Logo" class="brand-logo-img">
              </a>
              <div>
                <a href="index.html" class="director-name text-decoration-none">e-mentor's Academy</a>
                <p class="text-muted small fw-bold mb-0">One destination for all your school needs</p>
              </div>
            </div>
          </div>
        </div>
      `;

    this.innerHTML = `
      <header class="py-3 shadow-sm sticky-top">
        ${headerContent}
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="py-5 bg-light border-top">
        <div class="container">
          <div class="contact-bar-wrapper">
            <!-- Enroll Button -->
            <div class="d-flex align-items-center gap-3">
              <button class="enroll-badge-btn enroll-trigger-btn shadow-sm">
                <i class="bi bi-geo-alt-fill"></i> ENROLL NOW
              </button>
              <div>
                <span class="enroll-subtext">for a Better<br>Tomorrow!</span>
              </div>
            </div>

            <!-- Call/WhatsApp Info -->
            <div>
              <a href="https://wa.me/919381808615" target="_blank" class="phone-contact-group">
                <div class="phone-icon-circle">
                  <i class="bi bi-telephone-fill"></i>
                </div>
                <div class="phone-icon-circle whatsapp">
                  <i class="bi bi-whatsapp"></i>
                </div>
                <div>
                  <span class="phone-number-text">9381808615</span>
                </div>
              </a>
            </div>

            <!-- Payment details -->
            <div class="payment-group">
              <div class="text-end">
                <span class="payment-label-sub">Gpay/phonepe</span>
                <span class="payment-apps-text d-block">9110308674</span>
              </div>
            </div>
          </div>
          <div class="text-center mt-4 text-muted small">
            &copy; 2026 e-mentor's Academy. All Rights Reserved. | <a href="privacy.html"
              class="text-muted text-decoration-none footer-link-hover">Privacy Policy</a> | Dedicated to Academic
            Excellence.
          </div>
        </div>
      </footer>

      <!-- Enrollment Modal / Popup -->
      <div class="modal fade" id="enrollModal" tabindex="-1" aria-labelledby="enrollModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg" style="border-radius: var(--border-radius-custom);">
            <div class="modal-header text-white"
              style="background-color: var(--primary-purple); border-top-left-radius: var(--border-radius-custom); border-top-right-radius: var(--border-radius-custom);">
              <h5 class="modal-title" id="enrollModalLabel"><i class="bi bi-mortarboard-fill me-2"></i>Academy Registration
              </h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
              <form id="enrollForm">
                <div class="mb-3">
                  <label for="studentName" class="form-label fw-bold">Student Name</label>
                  <input type="text" class="form-control" id="studentName" placeholder="Enter student's full name" required>
                </div>
                <div class="mb-3">
                  <label for="studentClass" class="form-label fw-bold">Current Grade / Class</label>
                  <select class="form-select" id="studentClass" required>
                    <option value="" disabled selected>Select class / track</option>
                    <option value="grades-1-5">Grades 1-5 (School Tuition + Olympiad Track)</option>
                    <option value="grades-6-10">Grades 6-10 (Integrated Tuition + Foundation Track)</option>
                    <option value="grades-6-10-plus">Grades 6-10 (Foundation Plus Track)</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="parentName" class="form-label fw-bold">Parent / Guardian Name</label>
                  <input type="text" class="form-control" id="parentName" placeholder="Enter parent's name" required>
                </div>
                <div class="mb-3">
                  <label for="contactNumber" class="form-label fw-bold">Contact Number (WhatsApp)</label>
                  <input type="tel" class="form-control" id="contactNumber" placeholder="Enter 10-digit number"
                    pattern="[0-9]{10}" required>
                </div>
                <button type="submit" class="btn btn-primary w-100 py-2 fw-bold"
                  style="background-color: var(--primary-purple); border-color: var(--primary-purple);">Submit
                  Registration</button>
              </form>

              <!-- Success Message -->
              <div id="enrollSuccessMsg" class="alert alert-success text-center mt-3 d-none" role="alert">
                <i class="bi bi-check-circle-fill me-2 fs-5"></i>
                Registration details submitted successfully! We will contact you on WhatsApp shortly.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);
