import galleryItems from './gallery-items.js';
console.log(galleryItems);

const ulRef = document.querySelector('.js-gallery');

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

ulRef.addEventListener('click', onGallerysClick);

function onGallerysClick(event) {
    // console.log(event.target.nodeName);

    if(event.target.nodeName !== 'IMG') {
        console.log('не попал')
        return;
    }
    const imgClik = event.target;
    imgClik.dataset.src = galleryItem.original;
   console.log(imgClik.src)
}