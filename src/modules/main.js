export const renderCard = function (cardData) {
  const cardGit = document.querySelector('.cards__item--git');
  const img = new Image();
  img.src = cardData.imgSrc;
  img.alt = cardData.imgAlt;

  const card = document.createElement('div');
  card.classList.add('cards__item', 'section');
  card.innerHTML = `
  <div class="cards__title">${cardData.title}</div>
  <div class="cards__descr">
  ${cardData.descr}
  </div>
  <a class="cards__link" href=${cardData.link}>See Project  <svg viewBox="0 0 330 180" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 105H278.787L229.393 154.394C223.535 160.251 223.535 169.749 229.393 175.607C232.322 178.535 236.161 180 240 180C243.839 180 247.678 178.535 250.606 175.606L325.606 100.606C331.464 94.7488 331.464 85.2508 325.606 79.3928L250.606 4.39275C244.749 -1.46425 235.251 -1.46425 229.393 4.39275C223.535 10.2497 223.535 19.7478 229.393 25.6058L278.787 74.9998H15C6.716 74.9998 0 81.7158 0 89.9998C0 98.2838 6.716 105 15 105Z"
  />
</svg></a>
  `;
  card.insertAdjacentElement('beforeend', img);

  cardGit.insertAdjacentElement('beforebegin', card);
};
