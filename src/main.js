import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from "./js/render-functions";
import { fetchData } from "./js/pixabay-api";

const form = document.querySelector('form');
const container = document.querySelector('.container');
const loadMore = document.querySelector('.load-more');

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47674643-19b0472e1fe1a72aec21686ba';

let page = 1;
let per_page = 15;
let currentQuery = '';

const lightbox = new SimpleLightbox('.container a');

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', handleLoadMore);

function handleSubmit(e) {
    e.preventDefault();

    const input = e.target.elements.input;

    if (input.value.trim() === '') {
        iziToast.warning({
            message: 'Please enter a valid search term.',
        });
        return;
    }

    currentQuery = input.value.trim();
    container.innerHTML = '';
    page = 1;
    loadMore.classList.add('btn-hidden');
    fetchImages();
    e.target.reset();
}

function handleLoadMore() {
    page += 1;
    fetchImages();
}

async function fetchImages() {
    const loader = document.createElement('span');
    loader.classList.add('loader');
    loadMore.insertAdjacentElement('afterend', loader);

    try {
        const data = await fetchData(BASE_URL, currentQuery, page, per_page);

        if (page === 1 && data.totalHits === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }

        container.insertAdjacentHTML('beforeend', createMarkup(data.hits));
        lightbox.refresh();

        if (container.childElementCount >= data.totalHits) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
            loadMore.classList.add('btn-hidden');
        } else {
            loadMore.classList.remove('btn-hidden');
        }

        smoothScroll();
    } catch (error) {
        iziToast.error({
            message: 'An error occurred while fetching images. Please try again later.',
        });
    } finally {
        loader.remove();
    }
}

function smoothScroll() {
    const { height: cardHeight } = container.firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}