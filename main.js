(function(){
  const $ = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

  // Mobile nav toggle
  const btn = $('#btnMenu');
  const mobileNav = $('#mobileNav');
  if(btn && mobileNav){
    btn.addEventListener('click', () => {
      const open = mobileNav.getAttribute('data-open') === '1';
      mobileNav.setAttribute('data-open', open ? '0' : '1');
      mobileNav.style.display = open ? 'none' : 'block';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  // Smooth scroll with sticky header offset
  const header = $('#siteHeader');
  const offset = () => (header ? header.getBoundingClientRect().height + 10 : 70);

  function scrollToId(id){
    const el = document.getElementById(id);
    if(!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset();
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function bindNavLinks(scope){
    $$('a[data-scroll]', scope).forEach(a => {
      a.addEventListener('click', (e) => {
        const target = a.getAttribute('data-scroll');
        if(!target) return;
        e.preventDefault();
        // close mobile nav if open
        if(mobileNav && mobileNav.getAttribute('data-open') === '1'){
          mobileNav.setAttribute('data-open','0');
          mobileNav.style.display = 'none';
          if(btn) btn.setAttribute('aria-expanded','false');
        }
        scrollToId(target);
      });
    });
  }

  bindNavLinks(document);

  // WhatsApp FAB defaults to Tere
  const fab = $('#waFab');
  if(fab){
    fab.addEventListener('click', () => {
      const href = fab.getAttribute('data-href');
      if(href) window.open(href, '_blank', 'noopener');
    });
  }
})();
