const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    primaryNav.classList.toggle('is-open', !isOpen);
  });

  primaryNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      primaryNav.classList.remove('is-open');
    }
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const enquiryForm = document.querySelector('#enquiry-form');

if (enquiryForm) {
  const status = document.querySelector('#form-status');
  const service = document.querySelector('#service');
  const requestedService = new URLSearchParams(window.location.search).get('service');

  if (requestedService && [...service.options].some((option) => option.value === requestedService || option.text === requestedService)) {
    service.value = requestedService;
  }

  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';
    let firstInvalidField;

    enquiryForm.querySelectorAll('input, select, textarea').forEach((field) => {
      const error = field.parentElement.querySelector('.field-error');
      const isValid = field.checkValidity();
      field.setAttribute('aria-invalid', String(!isValid));
      error.textContent = isValid ? '' : field.validationMessage;

      if (!isValid && !firstInvalidField) {
        firstInvalidField = field;
      }
    });

    if (firstInvalidField) {
      status.textContent = 'Please check the highlighted fields and try again.';
      firstInvalidField.focus();
      return;
    }

    status.textContent = 'Your details are valid, but this demo form is not connected and nothing has been sent. Please email info@apdigi.co.za or configure a form service to receive enquiries.';
  });

  enquiryForm.addEventListener('input', (event) => {
    const field = event.target;
    if (field.matches('input, select, textarea') && field.getAttribute('aria-invalid') === 'true' && field.checkValidity()) {
      field.setAttribute('aria-invalid', 'false');
      field.parentElement.querySelector('.field-error').textContent = '';
    }
  });
}