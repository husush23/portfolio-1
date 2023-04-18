const mobileHam = document.querySelector('.menu-m');
const mobileMenu = document.querySelector('.mobile-menu');

function openMenu() {
  mobileHam.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
}
document.querySelector('.btn-hover').addEventListener('click', openMenu);

function closeMenu() {
  mobileHam.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
}
mobileMenu.addEventListener('click', closeMenu);
