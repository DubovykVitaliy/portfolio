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
}
