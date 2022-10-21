export default function observeScrolling() {
  const allSections = document.querySelectorAll('.section');

  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('sec-fade');
      } else {
        entry.target.classList.add('sec-fade');
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  allSections.forEach((section) => {
    section.classList.add('sec-fade');
    observer.observe(section);
  });

  ///////////////////////////////
  //    Scroll Event for switching arrow pointers
  ///////////////////////////////
  function handleScroll() {
    const scrollArrow = document.querySelector('.hero__cta');
    const topArrow = document.querySelector('.footer__wrapper');
    const wrapper = document.querySelector('.wrapper');

    wrapper.addEventListener('scroll', (event) => {
      if (wrapper.scrollTop > window.innerHeight) {
        scrollArrow.classList.add('arrow-scroll-hidden');
        topArrow.classList.add('arrow-top-hidden');
      } else {
        scrollArrow.classList.remove('arrow-scroll-hidden');
        topArrow.classList.remove('arrow-top-hidden');
      }
    });
  }
  handleScroll();
}
