// form
//
// Email checking use ValidityState API
// Name and Message checking use JS functions with writing conditions.
// Validation occur on INPUT and SUBMIT events.
//
import { showModal, showSpinner, closeSpinner } from './modal';
import spinner from '../icon/spinner.svg';
import check from '../icon/check.svg';
import uncheck from '../icon/uncheck.svg';
//
//
export const submitForm = () => {
  const form = document.querySelector('.form'),
    nameEl = document.querySelector('#name'),
    emailEl = document.querySelector('#email'),
    checkboxEl = document.querySelector('#checkbox'),
    messageEl = document.querySelector('#message');

  const message = {
    loading: 'icon/Spinner.svg',
    success: 'Thank you! Your message has been received.',
    sccessSvg: check,
    failure: 'Sorry. Something went wrong there. Try again.',
    failureSvg: uncheck,
  };

  // showModal(message.success, message.sccessSvg);
  //
  const isRequired = (value) => (value === '' ? false : true);
  const isBetween = (length, min, max) => (length >= min && length <= max ? true : false);

  const showError = (input, message) => {
    input.closest('.form__field').classList.remove('success');
    input.closest('.form__field').classList.add('error');
    const error = input.nextElementSibling;
    error.textContent = message;
  };
  const showSuccess = (input) => {
    input.closest('.form__field').classList.remove('error');
    input.closest('.form__field').classList.add('success');
    const error = input.nextElementSibling;
    error.textContent = '';
  };
  const resetForm = () => {
    form.reset();
  };

  const checkName = () => {
    let valid = false;
    const min = 3,
      max = 25;
    const username = nameEl.value.trim();
    if (!isRequired(username)) {
      showError(nameEl, 'Name cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
      showError(nameEl, `Name must be between ${min} and ${max} characters.`);
    } else {
      showSuccess(nameEl);
      valid = true;
    }
    return valid;
  };
  const checkMessage = () => {
    let valid = false;
    const min = 3,
      max = 250;
    const message = messageEl.value.trim();
    if (!isRequired(message)) {
      showError(messageEl, 'Message cannot be blank.');
    } else if (!isBetween(message.length, min, max)) {
      showError(messageEl, `Message must be between ${min} and ${max} characters.`);
    } else {
      showSuccess(messageEl);
      valid = true;
    }
    return valid;
  };
  const checkEmail = () => {
    let valid = false;
    if (emailEl.validity.valueMissing) {
      showError(emailEl, 'You need to enter an e-mail address.');
    } else if (emailEl.validity.typeMismatch) {
      showError(emailEl, 'Entered value needs to be an e-mail address.');
    } else {
      showSuccess(emailEl);
      valid = true;
    }
    return valid;
  };

  form.addEventListener('input', (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case 'name':
        checkName();
        break;
      case 'email':
        checkEmail();
        break;
      case 'message':
        checkMessage();
        break;
    }
  });

  //////////////////////////////////////////////////////////////////////

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let validForm = checkEmail() && checkName() && checkMessage() && checkboxEl.checked;

    if (validForm) {
      showSpinner(spinner);
      // console.log(e);
      send(form);
    }
  });

  function send(form) {
    console.log('Отправка запроса');

    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log(json);

    postData('./send.php', formData)
      .then((data) => {
        closeSpinner();
        showModal(message.success, message.sccessSvg);
        console.log(data);
      })
      .catch(() => {
        closeSpinner();
        showModal(message.failure, message.failureSvg);
      })
      .finally(() => {
        resetForm();
      });
  }

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return await res.json();
  };
  //////////////////////////////////////////////////////////////
};
