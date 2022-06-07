let pageId = document
  .querySelector('[data-id-page]')
  .getAttribute('data-id-page');

console.log(pageId);

let menuItem = document.querySelector(`[data-id-menu=${pageId}]`);

console.log(menuItem);

if (pageId == menuItem.getAttribute('data-id-menu')) {
  menuItem.classList.add('menu__link--active');
}
