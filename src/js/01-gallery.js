// import { galleryItems } from './gallery-items.js';
// Change code below this line

import { simplelightbox } from './gallery-items.js';

// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(simplelightbox);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onClickGalleryItem);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
      
function onClickGalleryItem(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return
  }
    
const instance = basicLightbox.create(`
    <img src= ${evt.target.dataset.source} width="800" height="600">
`)

instance.show()
  }




