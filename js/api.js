import { closeMessage, showServerErrorMessage, showUploadErrorMessage, showUploadSuccessMessage } from './info-messages.js';

const getData = (renderPictures) => {
  fetch('https://29.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      closeMessage();
      return response.json();
    })
    .then((data) => renderPictures(data))
    .catch(() => showServerErrorMessage());
};

const sendData = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch(
    'https://29.javascript.pages.academy/kekstagra',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        showUploadSuccessMessage();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      showUploadErrorMessage();
    });
};

export { getData, sendData };
