import * as filters from './effects-settings.js';

const imagePreview = document.querySelector('.img-upload__preview').children[0];
const effectLevelFieldset = document.querySelector('.img-upload__effect-level');
const effectsFieldset = document.querySelector('.img-upload__effects');
const effectLevel = effectLevelFieldset.querySelector('.effect-level__value');
const effectSlider = effectLevelFieldset.querySelector('.effect-level__slider');
const noEffects = effectsFieldset.querySelector('#effect-none');
const chromeEffect = effectsFieldset.querySelector('#effect-chrome');
const sepiaEffect = effectsFieldset.querySelector('#effect-sepia');
const marvinEffect = effectsFieldset.querySelector('#effect-marvin');
const phobosEffect = effectsFieldset.querySelector('#effect-phobos');
const heatEffect = effectsFieldset.querySelector('#effect-heat');

let currentEffect = filters.DEFAULT;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  format: {
    to: (value) => value,
    from: (value) => parseFloat(value).toFixed(1)
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const updateImageFilter = () => {
  imagePreview.style.filter =
    currentEffect === filters.DEFAULT
      ? ''
      : `${currentEffect.style.filter}(${effectSlider.noUiSlider.get()}${currentEffect.style.unit})`;
};

const showSlider = () => {
  effectLevelFieldset.classList.remove('hidden');
};

const hideSlider = () => {
  effectLevelFieldset.classList.add('hidden');
};

hideSlider();

const setCurrentEffect = (effect) => {
  currentEffect = effect;
};

noEffects.addEventListener('click', () => {
  noEffects.checked = true;
  effectLevel.value = '';
  hideSlider();
  setCurrentEffect(filters.DEFAULT);
  updateImageFilter();
});

chromeEffect.addEventListener('click', () => {
  effectSlider.noUiSlider.updateOptions(filters.CHROME_EFFECT.sliderSettings);
  chromeEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.CHROME_EFFECT);
  updateImageFilter();
});

sepiaEffect.addEventListener('click', () => {
  effectSlider.noUiSlider.updateOptions(filters.SEPIA_EFFECT.sliderSettings);
  sepiaEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.SEPIA_EFFECT);
  updateImageFilter();
});

marvinEffect.addEventListener('click', () => {
  effectSlider.noUiSlider.updateOptions(filters.MARVIN_EFFECT.sliderSettings);
  marvinEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.MARVIN_EFFECT);
  updateImageFilter();
});

phobosEffect.addEventListener('click', () => {
  effectSlider.noUiSlider.updateOptions(filters.PHOBOS_EFFECT.sliderSettings);
  phobosEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.PHOBOS_EFFECT);
  updateImageFilter();
});

heatEffect.addEventListener('click', () => {
  effectSlider.noUiSlider.updateOptions(filters.HEAT_EFFECT.sliderSettings);
  heatEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.HEAT_EFFECT);
  updateImageFilter();
});

effectSlider.noUiSlider.on('update', () => {
  effectLevel.value = effectSlider.noUiSlider.get();
  updateImageFilter();
});

export { hideSlider, setCurrentEffect, updateImageFilter };
