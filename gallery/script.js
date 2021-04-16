// import arrImages from 'images.js';
const arrImages = [{
        preview: './img/1.jpg',
        original: './img/1.jpg'
    }, {
        preview: './img/2.jpg',
        original: './img/2.jpg'
    }, {
        preview: './img/3.webp',
        original: './img/3.webp'
    }, {
        preview: './img/4.jpg',
        original: './img/4.jpg'
    }, {
        preview: './img/5.jpg',
        original: './img/5.jpg'
    }, {
        preview: './img/6.jpg',
        original: './img/6.jpg'
    }, {
        preview: './img/7.jpg',
        original: './img/7.jpg'
    }, {
        preview: './img/8.jpg',
        original: './img/8.jpg'
    },
    {
        preview: './img/9.jpg',
        original: './img/9.jpg'
    }
];
const gallery = document.querySelector('ul')
const imgModalList = document.querySelector('.lightbox__content')
const imgModalContainer = document.querySelector('.lightbox')
const buttonClose = document.querySelector('.lightbox__button')
const modalImg = document.querySelector('.lightbox__image')
const liStr = arrImages.reduce((liStr, elem) => liStr + `<li><img src="${elem.preview}"  data-source="${elem.original}" class="gallery__image gallery__item gallery__link"></a></li>`, '')
gallery.insertAdjacentHTML('afterbegin', liStr)

const openModal = (event) => {
    modalImg.setAttribute('src', event.target.attributes[1].value);
    imgModalList.insertAdjacentHTML('afterend', modalImg)
    imgModalContainer.classList.add('is-open')


}
const closeModal = (event) => {
    if (event.target !== modalImg || event.target === 'Escape') {
        imgModalContainer.classList.remove('is-open')
        modalImg.removeAttribute('src')

    }

}
gallery.addEventListener('click', openModal)
buttonClose.addEventListener('click', closeModal)
imgModalContainer.addEventListener('click', closeModal)
document.addEventListener('keyup', closeModal)