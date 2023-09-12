import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', markup);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
   });

    function createMarkup (arr) {
    return arr.map(({ original, preview, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}" >
         <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
   </li>`
    }).join('');
  };

console.log(galleryItems);
