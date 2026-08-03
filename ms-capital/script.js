const header = document.getElementById('siteHeader');
const menuButton = document.getElementById('menuButton');
const mobileNav = document.getElementById('mobileNav');

const syncHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 18);
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
