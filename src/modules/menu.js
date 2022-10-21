import { mqMatch } from '../index.js';

export const handleMenu = () => {
  const mainMenu = document.querySelector('.header__nav--main'),
    smallMenu = document.querySelector('.header__nav--mobile'),
    closeBtn = document.querySelector('.header__btn--close'),
    openBtn = document.querySelector('.header__btn--open'),
    topEl = document.querySelector('#top'),
    header = document.querySelector('.header');
  const toUp = document.querySelector('.arrow-up');
  // linksList = document.querySelector('.header__nav--list'),
  // allLinks = document.querySelector('.header__nav--list').querySelectorAll('a:link');

  const showMenu = () => {
    mainMenu.classList.add('show-main-menu');
    smallMenu.classList.add('show-main-menu');
  };
  const hideMenu = () => {
    //
    mainMenu.classList.remove('show-main-menu');
    smallMenu.classList.remove('show-main-menu');
  };

  //   closeBtn.addEventListener('click', hideMenu);
  // openBtn.addEventListener('click', showMenu);
  //

  // allLinks.forEach((link) => {
  //   console.log(link);
  //   link.addEventListener('click', (e) => {
  //     e.preventDefault();
  //   });
  // });

  //
  header.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.closest('.header__btn--open')) {
      showMenu();
    } else if (e.target == closeBtn) {
      hideMenu();
    } else if (e.target.closest('a:link')) {
      e.preventDefault();
      const link = e.target.closest('a:link');
      const href = link.getAttribute('href');
      if (href == '#') {
        if (mqMatch) {
          topEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      }
      if (href !== '#' && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      if (mainMenu.classList.contains('show-main-menu')) hideMenu();
    }
  });

  toUp.addEventListener('click', (e) => {
    if (mqMatch && e.target.closest('.arrow-up')) {
      e.preventDefault();
      // console.log(e.target.closest);
      topEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
};
