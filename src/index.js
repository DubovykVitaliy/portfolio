import './index.html';
import './index.scss';

import './css/main.css';
// import './send.php';
// function requireAll(r) {
//   r.keys().forEach(r);
// }
// requireAll(require.context('./icons', true, /\.svg$/));
// import '@babel/polyfill';
import { submitForm } from './modules/form.js';
import { renderCard } from './modules/main.js';
import { handleMenu } from './modules/menu.js';
import observeScrolling from './modules/intersection.js';
// import  from './modules/intersection.js';
import screen from './img/screen3.png';
import screen2 from './img/screen3.png';

import { showModal } from './modules/modal.js';

const cards = [
  {
    title: 'Portfolio',
    descr: 'Fast and fully responsive website, created with SCSS and native JavaScript.',
    imgSrc: screen,
    imgAlt: 'screenshot Portfolio',
    link: '#',
  },
  {
    title: 'Food',
    descr: 'One of my first training projects, mostly oriented on JS',
    imgSrc: screen2,
    imgAlt: 'screenshot food',
    link: '#',
  },
];
cards.forEach((cardData) => renderCard(cardData));

submitForm();

handleMenu();

observeScrolling();
//
//Defining window height and passing it into CSS variable.
//
const setHeight = () => {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--hero-height', `${vh}px`);
};
window.addEventListener('resize', setHeight);
setHeight();

//
// Setting EventListener to check mediaqueries  and store result in variable.
//
let mqMatch;
const mq = window.matchMedia('screen and (min-device-width: 1024px)');
const handleMatchMedia = function (mq) {
  mq.matches ? (mqMatch = true) : (mqMatch = false);
};
handleMatchMedia(mq);
mq.addEventListener('change', handleMatchMedia);

//
// This EventListener applied for mailTo anchor because animation marquee
// interfered in normal work af a tag
//

document.querySelector('.header__links--mail').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('mailto:dubovykve@gmail.com');
});
//

export { mqMatch };
