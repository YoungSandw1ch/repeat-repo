(() => {
  const refs = {
    openMenu: document.querySelector('[data-mobile-button]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    btnIconOpen: document.querySelector('[data-icon-open]'),
    btnIconClose: document.querySelector('[data-icon-close]'),
    body: document.querySelector('body'),
    headerContainer: document.querySelector('.header__container'),
  };

  refs.openMenu.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    refs.btnIconOpen.classList.toggle('icon-is-hidden');
    refs.btnIconClose.classList.toggle('icon-is-hidden');
    refs.body.classList.toggle('overflow');
    refs.mobileMenu.classList.toggle('mobile-menu--is-open');
    refs.headerContainer.classList.toggle('header__container--static');
  }

  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('mobile-menu--is-open');
  // });
})();
