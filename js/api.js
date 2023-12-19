const Routes = {
  GET_DATA: 'https://29.javascript.pages.academy/kekstagram/data',
  SEND_DATA: 'https://29.javascript.pages.academy/kekstagram'
};

const getData = () => fetch(Routes.GET_DATA)
  .then((response) => response.json())
  .then((data) => Promise.resolve(data))
  .catch(() => Promise.reject());

const sendData = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  return fetch(
    Routes.SEND_DATA,
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        return Promise.resolve();
      }
      throw new Error();
    })
    .catch(() => Promise.reject());
};

export { getData, sendData };
