// Petite amélioration progressive
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav-toggle'); const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded;
  });
  nav.hidden = true;
}
