import { galleryItems } from './gallery-items.js';
// Change code below this line

function onGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
};

const galleryEL = document.querySelector('.gallery');
galleryEL.insertAdjacentHTML('beforeend', onGalleryMarkup(galleryItems));

galleryEL.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const image = basicLightbox.create(`
     <img src="${event.target.dataset.source}">
    `);

    image.show();
};