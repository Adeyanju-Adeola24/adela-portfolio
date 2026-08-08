// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = open ? 'none' : 'flex';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
}));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth shade on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.background = window.scrollY > 40 ? 'rgba(11,15,20,.95)' : 'rgba(11,15,20,.8)';
});
