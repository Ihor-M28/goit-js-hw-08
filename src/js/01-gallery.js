import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onClickGalleryItem);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
      
function onClickGalleryItem(evt) {
    evt.preventDefault();
}
var lightbox = new SimpleLightbox(".gallery__link", { captionsData: 'alt', captionDelay: 250, });




