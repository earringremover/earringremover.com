(function () {
  const btn = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // close menu on link click (mobile)
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // close menu on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
