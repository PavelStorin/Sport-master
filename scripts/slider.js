import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function initSlider() {
    document.addEventListener("DOMContentLoaded", () => {
        if (document.querySelector(".popular-brands__slider")) {
            new Swiper(".popular-brands__slider", {
                slidesPerView: 'auto',
                spaceBetween: 8, // расстояние между ними
                keyboard: true,

                breakpoints: {
                    1024: {
                        slidesPerView: 6.5, // кол-во видимых слайдов
                        slidesPerGroup: 6, // переключаем по 10 слайдов
                    },

                    1280: {
                        slidesPerView: 8.5, // кол-во видимых слайдов
                        slidesPerGroup: 6, // переключаем по 10 слайдов
                    },

                    1440: {
                        slidesPerView: 10.5, // кол-во видимых слайдов
                        slidesPerGroup: 10, // переключаем по 10 слайдов
                    },
                },

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: false,
                },

            });
        }
    });
}
