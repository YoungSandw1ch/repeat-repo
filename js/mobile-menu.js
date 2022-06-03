(() => {
  const refs = {
    openMenu: document.querySelector('[data-mobile-button]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    btnIconOpen: document.querySelector('[data-icon-open]'),
    btnIconClose: document.querySelector('[data-icon-close]'),
    body: document.querySelector('body'),
  };

  refs.openMenu.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    refs.btnIconOpen.classList.toggle('icon-is-hidden');
    refs.btnIconClose.classList.toggle('icon-is-hidden');
    refs.body.classList.toggle('overflow');
    refs.mobileMenu.classList.toggle('mobile-menu--is-hidden');
  }
})();
