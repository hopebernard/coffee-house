"use strict"


const burgerIcon = document.querySelector('.icon-menu');
const burgerMenu = document.querySelector('.menu');

burgerIcon.addEventListener('click', function() {
    burgerIcon.classList.toggle('_burger-icon-active');
    burgerMenu.classList.toggle('_burger-menu-active');
});



function bildSliders() {
    let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
    if (sliders) {
        sliders.forEach(slider => {
            slider.parentElement.classList.add('swiper');
            slider.classList.add('swiper-wrapper');
            for (const slide of slider.children) {
                slide.classList.add('swiper-slide');
            }
        });
    }
}

function initSliders() {
    bildSliders();
    if (document.querySelector('.show__slider')) {
        new Swiper('.show__slider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
            loop: true,
            observer: true,
            observeParents: true,
            speed: 800, 
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 50,
            allowTouchMove: true,
            slidesPerView: 1,
        });
    }
};

window.addEventListener('load', function(e) {
    initSliders();
});
window.addEventListener('resize', function(e) {
    initSliders();
});


const moreIcon = document.querySelector('.menu-extra-icon');
const moreCards = document.querySelector('._more');
const block = document.querySelector('.block__items');

moreIcon.addEventListener('click', function() {
    moreIcon.classList.toggle('_icon-more-active');
    moreCards.classList.toggle('_more-active');
});