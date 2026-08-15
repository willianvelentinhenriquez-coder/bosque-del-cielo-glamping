document.addEventListener('DOMContentLoaded', () => {

 
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }


  const navbar = document.querySelector('#navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
  const yearSpan = document.querySelector('#year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

 
  const contactForm = document.querySelector('#contact-form');
  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const mensajeInput = document.querySelector('#mensaje');
  const successAlert = document.querySelector('#form-success');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showError = (input, errorElement, message) => {
    input.classList.add('input-error');
    errorElement.textContent = message;
  };

  const clearError = (input, errorElement) => {
    input.classList.remove('input-error');
    errorElement.textContent = '';
  };

 
  if (nombreInput) {
    nombreInput.addEventListener('input', () => {
      clearError(nombreInput, document.querySelector('#nombre-error'));
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      clearError(emailInput, document.querySelector('#email-error'));
    });
  }

  if (mensajeInput) {
    mensajeInput.addEventListener('input', () => {
      clearError(mensajeInput, document.querySelector('#mensaje-error'));
    });
  }


  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      const nombreError = document.querySelector('#nombre-error');
      const emailError = document.querySelector('#email-error');
      const mensajeError = document.querySelector('#mensaje-error');

     
      if (nombreInput.value.trim() === '') {
        showError(nombreInput, nombreError, 'El nombre completo es requerido.');
        isValid = false;
      } else if (nombreInput.value.trim().length < 3) {
        showError(nombreInput, nombreError, 'El nombre debe tener al menos 3 caracteres.');
        isValid = false;
      } else {
        clearError(nombreInput, nombreError);
      }

     
      if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'El correo electrónico es requerido.');
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, emailError, 'Ingresa un correo electrónico válido (ej. nombre@correo.com).');
        isValid = false;
      } else {
        clearError(emailInput, emailError);
      }

   
      if (mensajeInput.value.trim() === '') {
        showError(mensajeInput, mensajeError, 'Por favor detalla la cabaña y fechas requeridas.');
        isValid = false;
      } else if (mensajeInput.value.trim().length < 10) {
        showError(mensajeInput, mensajeError, 'El mensaje debe tener al menos 10 caracteres.');
        isValid = false;
      } else {
        clearError(mensajeInput, mensajeError);
      }

      if (isValid) {
        successAlert.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
          successAlert.classList.add('hidden');
        }, 5000);
      }
    });
  }
});
