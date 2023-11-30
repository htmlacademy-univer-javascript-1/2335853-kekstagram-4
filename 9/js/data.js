import { getRandomInteger, getRandomArrayElement } from './util.js';

const NAMES_OF_COMMENTATORS = [
  'Кекс',
  'Рудольф',
  'Борис',
  'Пётр',
  'Феликс',
  'Василий'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const POST_DESCRIPTIONS = [
  'Это самая красивая фотография, которую вы когда-либо видели',
  'Отдыхаю',
  'Новый пост',
  'Поставьте лайк пожалуйста',
  'Я заработал миллион за месяц с помощью... (продолжение читайте в источнике)'
];

const POSTS_AMOUNT = 25;

const CommentsConfig = {
  MIN_ID: 1,
  MAX_ID: 9999,
  MIN_AMOUNT: 0,
  MAX_AMOUNT: 30
};

const LikesConfig = {
  MIN: 15,
  MAX: 200
};


const getRandomAvatar = () => `img/avatar-${getRandomInteger(1, 6)}.svg`;

const createCommentIdGenerator = () => {
  const previousIdValues = [];
  return () => {
    let currentValue = getRandomInteger(CommentsConfig.MIN_ID, CommentsConfig.MAX_ID);
    while (previousIdValues.includes(currentValue)) {
      currentValue = getRandomInteger(CommentsConfig.MIN_ID, CommentsConfig.MAX_ID);
    }
    previousIdValues.push(currentValue);
    return currentValue;
  };
};

const createPostIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId++;
    return lastGeneratedId;
  };
};

const generateCommentId = createCommentIdGenerator();
const generatePostId = createPostIdGenerator();

const createComment = () => (
  {
    id: generateCommentId(),
    avatar: getRandomAvatar(),
    message: getRandomArrayElement(COMMENT_MESSAGES),
    name: getRandomArrayElement(NAMES_OF_COMMENTATORS)
  }
);

const createOnePost = () => {
  const postId = generatePostId();
  return {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: getRandomArrayElement(POST_DESCRIPTIONS),
    likes: getRandomInteger(LikesConfig.MIN, LikesConfig.MAX),
    comments: Array.from({length: getRandomInteger(CommentsConfig.MIN_AMOUNT, CommentsConfig.MAX_AMOUNT)}, createComment)
  };
};

const createPosts = () => Array.from({length: POSTS_AMOUNT}, createOnePost);


export { createPosts };
