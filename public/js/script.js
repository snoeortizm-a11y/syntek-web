const hamburger = document.getElementById('hamburger');
const mobileMenu = documento.getElementById('mobileMenu');

if (hamburger && mobileNumber) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

const contactForm = document.getElementById('contactForm');

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu'); // ✅ document

if (hamburger && mobileMenu) { // ✅ mobileMenu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}