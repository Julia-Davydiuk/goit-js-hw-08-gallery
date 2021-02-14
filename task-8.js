import galleryItems from './gallery-items.js';
console.log(galleryItems);

const ulRef = document.querySelector('.js-gallery');
const divRef = document.querySelector('.lightbox');
const imgLightRef = document.querySelector('.lightbox__image');

const createProduct = galleryItems.map(galleryItem => {

    const liRef = document.createElement('li');
    liRef.classList.add("gallery__item");

    const aRef = document.createElement('a');
    aRef.classList.add("gallery__link");
    aRef.href = galleryItem.original;

    const imgRef = document.createElement('img');
    imgRef.classList.add("gallery__image");
    imgRef.src = galleryItem.preview;
    imgRef.setAttribute('data-source', galleryItem.original);
    imgRef.alt = galleryItem.description;
    // console.dir(imgRef)

    aRef.appendChild(imgRef);
    liRef.append(aRef)
  return liRef
});

ulRef.append(...createProduct);
// console.dir(ulRef);

ulRef.addEventListener('click', onGallerysClick)

function onGallerysClick(event) {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') {
        console.log('не попал')
        return;
    }
    // console.dir(event.target.dataset.source);

    divRef.classList.add('is-open');
    imgLightRef.src = event.target.dataset.source;
};

const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
closeModalBtn.addEventListener('click', () => {
  divRef.classList.remove('is-open');
  imgLightRef.removeAttribute("src"); 
});

