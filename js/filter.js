function app() {
  const buttons = document.querySelectorAll('.filter__btn');
  const cards = document.querySelectorAll('.product__item');

  function filter(category, items) {
    items.forEach(item => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';

      if (isItemFiltered && !isShowAll) {
        item.classList.add('anime');
      } else {
        item.classList.remove('hide');
        item.classList.remove('anime');
      }
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;

      buttons.forEach(button => {
        const hasActiveClass = button.classList.contains('filter__btn--active');

        if (hasActiveClass) {
          button.classList.remove('filter__btn--active');
        }
      });

      button.classList.add('filter__btn--active');

      filter(currentCategory, cards);
    });
  });

  cards.forEach(card => {
    card.ontransitionend = function () {
      if (card.classList.contains('anime')) {
        card.classList.add('hide');
      }
    };
  });
}

app();
