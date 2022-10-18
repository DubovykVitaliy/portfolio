const renderModal = function (message, imgSrc) {
  const thanksModal = document.createElement('div');
  thanksModal.setAttribute('id', 'modal__window');
  thanksModal.style.cssText = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
  opacity: 0.9;
  width: 30rem;
  padding-bottom: 4rem;
  `;
  //
  const closeBtn = document.createElement('button');
  closeBtn.id = 'modal__close';
  closeBtn.innerHTML = `&times;`;
  closeBtn.style.cssText = `
  background-color: transparent;
  border: none;
  font-size: 3.2rem;
  color: $main-tint10;
  cursor: pointer;
  margin-right: 2rem;
  `;
  //
  const img = new Image();
  img.src = imgSrc;
  img.alt = 'check Icon';
  img.style.cssText = `
width: 8rem;
heigth: 8rem;
margin: 0 auto;
`;
  //
  const modalMessage = document.createElement('span');
  modalMessage.textContent = `${message}`;
  modalMessage.style.cssText = `
  font-size: 2.4rem;
  padding: 2rem;
  color: $main-tint10;
  text-align: center;
  margin: 0 auto;
  `;
  thanksModal.appendChild(closeBtn);
  thanksModal.appendChild(img);
  thanksModal.appendChild(modalMessage);
  document.querySelector('.form').insertAdjacentElement('beforeend', thanksModal);
};

const closeModal = function () {
  const div = document.getElementById('modal__window');
  div.parentElement.removeChild(div);
};

const showModal = function (message, imgSrc) {
  renderModal(message, imgSrc);
  const btn = document.getElementById('modal__close');
  btn.addEventListener('click', () => {
    closeModal();
    clearTimeout(timer);
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      closeModal();
      clearTimeout(timer);
    }
  });
  let timer = setTimeout(() => {
    closeModal();
  }, 500000);
};

const showSpinner = function (src) {
  const spinner = new Image();
  spinner.id = 'form__spinner';
  spinner.src = src;
  spinner.style.cssText = `
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 6rem;
  height: 6rem;
  `;
  document.querySelector('.form').insertAdjacentElement('beforeend', spinner);
};
const closeSpinner = function () {
  document
    .querySelector('#form__spinner')
    .parentElement.removeChild(document.querySelector('#form__spinner'));
};
export { showModal, showSpinner, closeSpinner };
