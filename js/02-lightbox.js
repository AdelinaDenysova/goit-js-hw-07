import { galleryItems } from './gallery-items.js';
// Change code below this line

function onGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
};

const galleryEL = document.querySelector('.gallery');
galleryEL.insertAdjacentHTML('beforeend', onGalleryMarkup(galleryItems));

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250ms' });