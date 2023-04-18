const mobileHam = document.querySelector('.menu-m');
const mobileMenu = document.querySelector('.mobile-menu');
const elSize = document.querySelector('.introduction');

// Open
function openMenu() {
  mobileHam.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
}

// close menu
function closeMenu() {
  mobileHam.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
}