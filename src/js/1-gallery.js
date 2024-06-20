import { images } from '/js/gallare-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const containerGallery = document.querySelector('.gallery');
const itemsMarkup = createGalleryItems(images);

containerGallery.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItems(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__tem">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
       </a>
      </li>
    `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});