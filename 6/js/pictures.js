import { createPosts } from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPicture = (post) => {
  const newPicture = pictureTemplate.cloneNode(true);

  const postImage = newPicture.querySelector('.picture__img');
  const postLikes = newPicture.querySelector('.picture__likes');
  const postComments = newPicture.querySelector('.picture__comments');

  postImage.src = post.url;
  postImage.alt = post.description;
  postLikes.textContent = post.likes;
  postComments.textContent = post.comments.length;

  return newPicture;
};

const renderPictures = () => {
  const fragment = document.createDocumentFragment();
  const generatedData = createPosts();

  generatedData.forEach((post) => {
    fragment.appendChild(renderPicture(post));
  });

  pictureList.appendChild(fragment);
};

export { renderPictures };
