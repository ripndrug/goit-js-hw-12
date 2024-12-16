import { createMarkup } from "./js/render-functions";
import { fetchData } from "./js/pixabay-api";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('form');
const container = document.querySelector('.container');

const API_KEY = '38646847-22fc34a8305fe75e48b944d63';
const BASE_URL = 'https://pixabay.com/api/';

form.addEventListener('submit', handleSubmit);

const lightbox = new SimpleLightbox('.container a')

lightbox.on('shown.simplelightbox', function() {
    lightbox.options.captionsData = 'alt';
});

function handleSubmit(e) {
    e.preventDefault();

    const input = e.target.elements.input;

    if (input.value === '' || !input.value.trim()) {
        return;
    }

    container.innerHTML = '';
    
    const loader = document.createElement('span');
    loader.classList.add('loader');
    container.appendChild(loader);

    const params = new URLSearchParams({
        key: API_KEY,
        q: input.value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    })

    fetchData(`${BASE_URL}?${params}`)
        .then(data => {
            if (data.total === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
            
            container.innerHTML = createMarkup(data.hits);
            lightbox.refresh();
        })
        .catch(error => iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                }))
        .finally(() => {
            loader.remove();
            e.target.reset()
        })
}