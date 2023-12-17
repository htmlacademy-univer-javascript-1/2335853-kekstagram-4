const FILE_TYPES = ['.gif', '.jpg', '.jpeg', '.png'];

const effectsPreview = document.querySelectorAll('.effects__preview');

const setPicturePreview = (fileInput, preview) => {
  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((extension) => fileName.endsWith(extension));

  if (matches) {
    const fileUrl = URL.createObjectURL(file);
    preview.src = fileUrl;
    effectsPreview.forEach((effectPreview) => { effectPreview.style.backgroundImage = `url(${fileUrl})`; });
  }
};

export {setPicturePreview};
