import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')

function addItem() {
    return galleryItems.map(({preview, original, description}) =>
      `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </div>
      `
    ).join('')
  }


  const galleryContent = addItem(galleryItems)
  gallery.insertAdjacentHTML('beforeend', galleryContent)
  
  let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
  });