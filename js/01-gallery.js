// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// console.log(galleryItems);

// // Add image on page

// const galleryDocument = document.querySelector(".gallery");

// const markup = galleryItems.map(({ preview, original, description }) => 
//   `  <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
// ).join("");

// galleryDocument.innerHTML = markup;

// galleryDocument.addEventListener('click', openModal);

// function openModal(event) {
//     event.preventDefault();
//     if (!event.target.classList.contains("gallery__image")) {
//         return;
//     }
//     const instance = basicLightbox.create(
//         `<img src= ${event.target.dataset.source}>`,
//         {
//             onShow: () => {
//                 document.addEventListener("keydown", OnEscClose);
//             },
//             onClose: () => {
//                 document.removeEventListener("keydown", OnEscClose);
//             },
//         }
//     );
//     instance.show();

//     function OnEscClose(event) {
//         if (event.code === "Escape") {
//             instance.close();
//         }
//     }
// }

// // Second way
// 'use strict';
// import { galleryItems } from './gallery-items.js';


// // Add image on page
// const gallery = document.querySelector('.gallery');

// function addItem() {
//   return galleryItems
//     .map(({ preview, original, description }) => 
//       `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//        </div>`
//     )
//     .join("");
// }

// const galleryContent = addItem(galleryItems);
// gallery.insertAdjacentHTML('afterbegin', galleryContent);

// // Delegation
// gallery.addEventListener('click', onImgClick);

// let instance;

// function onImgClick(event) {
//   event.preventDefault();

//   if(event.target.nodeName !== 'IMG') {
//     return;
//   }

//   instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
//   instance.show();
//   window.addEventListener('keydown', onEscPressKey);
// }

// function onEscPressKey(event) {
//   if (event.code === 'Escape') {
//     instance.close();
//     window.removeEventListener('keydown', onEscPressKey);
//   }
// }

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')

function addItem() {
  return galleryItems.map(({preview, original, description}) =>
    `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
  ).join('')
}

const galleryContent = addItem(galleryItems)
gallery.insertAdjacentHTML('beforeend', galleryContent)

gallery.addEventListener('click', openModal)

let instance

function openModal(event) {
  event.preventDefault()
  if (event.target.nodeList === 'IMG') {
    return
  }
   instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" >`)
instance.show()
window.addEventListener('keydown', closeWindow)
}

function closeWindow(event) {
  if (event.code === 'Escape') {
    instance.close()
    window.removeEventListener('keydown', closeWindow)
  }

}
